import React from "react";

const CardView = ({ suppliers }) => {
  let suppliersArray = [];
  let weightingPrice = 10;
  let weightingOnTimeDelivery = 6;
  let weightingQuality = 8;


  //manipulating original supplier array of objects
  //--->>> addding scores per category and calculating total scores
  //as well as total hard/soft facts score
  for (let i = 0; i < suppliers.length; i++) {
    let obj = {};
    let pairPrice = {};
    let pairOnTimeDelivery = {};
    let pairQualitiy = {};

    //---- Hard Facts-----
    //Pricing Score
    if (suppliers[i].materialPriceChange >= 2) pairPrice = { priceScore: 0 * weightingPrice};
    else if (suppliers[i].materialPriceChange >= 0.3) pairPrice = { priceScore: 5 * weightingPrice};
    else if (suppliers[i].materialPriceChange >= -0.3) pairPrice = { priceScore: 10 * weightingPrice};
    else if (suppliers[i].materialPriceChange >= -2) pairPrice = { priceScore: 15 * weightingPrice};
    else if (suppliers[i].materialPriceChange < -2) pairPrice = { priceScore: 20 * weightingPrice};

    //OnTimeDelivery Score
    if (suppliers[i].deliveryPerformance >= 95) pairOnTimeDelivery = { onTimeScore: 20 * weightingOnTimeDelivery};
    else if (suppliers[i].deliveryPerformance >= 90) pairOnTimeDelivery = { onTimeScore: 15 * weightingOnTimeDelivery};
    else if (suppliers[i].deliveryPerformance >= 75) pairOnTimeDelivery = { onTimeScore: 10 * weightingOnTimeDelivery};
    else if (suppliers[i].deliveryPerformance >= 60) pairOnTimeDelivery = { onTimeScore: 5 * weightingOnTimeDelivery};
    else if (suppliers[i].deliveryPerformance < 60) pairOnTimeDelivery = { onTimeScore: 0 * weightingOnTimeDelivery};

    //Qualtity Score
    if (suppliers[i].qualityPerformance >= 98) pairQualitiy = { qualityScore: 15 * weightingQuality};
    else if (suppliers[i].qualityPerformance >= 95) pairQualitiy = { qualityScore: 10 * weightingQuality};
    else if (suppliers[i].qualityPerformance >= 90) pairQualitiy = { qualityScore: 5 * weightingQuality};
    else if (suppliers[i].qualityPerformance < 90) pairQualitiy = { qualityScore: 0 * weightingQuality};

    let pairHardFactsScore = {hardFactsScore: pairPrice.priceScore + pairOnTimeDelivery.onTimeScore + pairQualitiy.qualityScore};
    
    //---- Soft Facts-----    
    let pairSoftFactsScore = {softFactsScore: 100};

    //---- Total Score-----
    let pairTotalScore = {totalScore: pairHardFactsScore.hardFactsScore + pairSoftFactsScore.softFactsScore};


    //---ABC Evaluation: Rating of Supplier
    let pairEvaluation = {};
    if (pairTotalScore.totalScore >= 380) pairEvaluation = {totalRating: 'A'};
    else if (pairTotalScore.totalScore >= 350) pairEvaluation = {totalRating: 'B'};
    else if (pairTotalScore.totalScore >= 320) pairEvaluation = {totalRating: 'C'};
    else if (pairTotalScore.totalScore < 320) pairEvaluation = {totalRating: 'D'};
    


    //---adding all calculated objects together into a new array
    obj = { ...suppliers[i], ...pairPrice, ...pairOnTimeDelivery, ...pairQualitiy, ...pairHardFactsScore, ...pairSoftFactsScore, ...pairTotalScore, ...pairEvaluation };
    suppliersArray.push(obj);
  }
  console.log(suppliersArray)
  //--- Calculation of invoiceSum of all suppliers
  //-->>> ABC analysis
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }

  //--- Sorting Supplier Array
  suppliersArray.sort((a, b) => {
    return b.totalScore - a.totalScore;
  });
 

  return (
    <div>
      {suppliersArray.map((supplier) => (
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
                        {((supplier.invoiceValue / invoiceSum) * 100).toFixed(2)}
                        %
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Total Score:</td>
                      <td className="table-right">
                        {supplier.totalScore}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Hard Facts Score:</td>
                      <td className="table-right">
                        {supplier.hardFactsScore}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Soft Facts Score:</td>
                      <td className="table-right">
                        {supplier.softFactsScore}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={supplier.totalRating}>
                  {supplier.totalRating}
                </div>
              </div>
            </div>
            <div className="card-footer">
              Total: {supplier.totalRating} Supplier
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
