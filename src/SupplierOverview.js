import React from "react";

const SupplierOverview = ({ suppliers }) => {
  console.log(suppliers[0].supplierName);

  //------Hard Facts Calculation below:
  let priceScoreArray = [];
  let weightingPrice = 10;
  for (let i = 0; i < suppliers.length; i++) {
    if (suppliers[i].materialPriceChange >= 2) priceScoreArray.push(0 * weightingPrice);
    else if (suppliers[i].materialPriceChange >= 0.3) priceScoreArray.push(5 * weightingPrice);
    else if (suppliers[i].materialPriceChange >= -0.3) priceScoreArray.push(10 * weightingPrice);
    else if (suppliers[i].materialPriceChange >= -2) priceScoreArray.push(15 * weightingPrice);
    else if (suppliers[i].materialPriceChange < -2) priceScoreArray.push(20 * weightingPrice);
  }
  console.log(priceScoreArray);

  let onTimeDeliveryScoreArray = [];
  let weightingOnTimeDelivery = 6;
  for (let i = 0; i < suppliers.length; i++) {
    if (suppliers[i].deliveryPerformance >= 95 ) onTimeDeliveryScoreArray.push(20 * weightingOnTimeDelivery);
    else if (suppliers[i].deliveryPerformance >= 90 ) onTimeDeliveryScoreArray.push(15 * weightingOnTimeDelivery);
    else if (suppliers[i].deliveryPerformance >= 75 ) onTimeDeliveryScoreArray.push(10 * weightingOnTimeDelivery);
    else if (suppliers[i].deliveryPerformance >= 60 ) onTimeDeliveryScoreArray.push(5 * weightingOnTimeDelivery);
    else if (suppliers[i].deliveryPerformance < 60 ) onTimeDeliveryScoreArray.push(0 * weightingOnTimeDelivery);    
  }
  console.log(onTimeDeliveryScoreArray);

  let qualityScoreArray = [];
  let weightingQuality = 8;
  for (let i = 0; i < suppliers.length; i++) {
    if(suppliers[i].qualityPerformance >= 98) qualityScoreArray.push(15 * weightingQuality);
    else if(suppliers[i].qualityPerformance >= 95) qualityScoreArray.push(10 * weightingQuality);
    else if(suppliers[i].qualityPerformance >= 90) qualityScoreArray.push(5 * weightingQuality);
    else if(suppliers[i].qualityPerformance < 90) qualityScoreArray.push(0  * weightingQuality );
  }
  console.log(qualityScoreArray);

  let hardFactsScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    hardFactsScoreArray[i] =
      priceScoreArray[i] + onTimeDeliveryScoreArray[i] + qualityScoreArray[i];
  }

  //------Soft Facts Calculation below:
  let communicationScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    communicationScoreArray.push(suppliers[i].materialPriceChange);
  }

  let flexibilityScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    flexibilityScoreArray.push(suppliers[i].deliveryPerformance);
  }

  let innovationScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    innovationScoreArray.push(suppliers[i].qualityPerformance);
  }

  let softFactsScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    softFactsScoreArray[i] =
      communicationScoreArray[i] +
      flexibilityScoreArray[i] +
      innovationScoreArray[i];
  }

  //------Total Score Calculation below:
  let totalScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    totalScoreArray[i] = hardFactsScoreArray[i] + softFactsScoreArray[i];
  }

  //-----ABCD Classification based on Total Rating below:
  let totalRatingArray = [];
  for (let i = 0; i <  suppliers.length; i++) {
    if (totalScoreArray[i] >= 380) totalRatingArray.push('A');
    else if (totalScoreArray[i] >= 350) totalRatingArray.push('B');
    else if (totalScoreArray[i] >= 320) totalRatingArray.push('C');
    else if (totalScoreArray[i] < 320) totalRatingArray.push('D');
  }

  //----------------------------------
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }


  let indicatorArray = [];
  for (let i = 0; i <  suppliers.length; i++) {
    if (totalScoreArray[i] >= 380) indicatorArray.push('indicator-green');
    else if (totalScoreArray[i] >= 350) indicatorArray.push('indicator-yellow');
    else if (totalScoreArray[i] >= 320) indicatorArray.push('indicator-orange');
    else if (totalScoreArray[i] < 320) indicatorArray.push('indicator-red');
  }

  return (
    <div>
      {suppliers.map((supplier) => (
        <div className="supplier-score-card" key={supplier.id}>
          <div className="card">
            <h4 className="card-header">{supplier.supplierName}</h4>
            <div className="card-body">
              <div className="card-text">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="table-left">Supplier No:</td>
                      <td className="table-right">{supplier.supplierCode}</td>
                    </tr>
                    <tr>
                      <td className="table-left">Invoice Volume YEAR:</td>
                      <td className="table-right">{supplier.invoiceValue}</td>
                    </tr>
                    <tr>
                      <td className="table-left">
                        Percentage of Total Invoices:
                      </td>
                      <td className="table-right">
                        {((supplier.invoiceValue / invoiceSum) * 100).toFixed(
                          2
                        )}
                        %
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Total Score:</td>
                      <td className="table-right">
                        {totalScoreArray[supplier.id - 1]}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Hard Facts Score:</td>
                      <td className="table-right">
                        {hardFactsScoreArray[supplier.id - 1]}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Soft Facts Score:</td>
                      <td className="table-right">
                        {softFactsScoreArray[supplier.id - 1]}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={indicatorArray[supplier.id - 1]}>{totalRatingArray[supplier.id - 1]}</div>
              </div>
            </div>
            <div className="card-footer">Total: {totalRatingArray[supplier.id - 1]} Supplier</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierOverview;
