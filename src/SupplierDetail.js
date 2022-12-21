import React from "react";

const SupplierDetail = ({ suppliers }) => {
  console.log(suppliers[0].supplierName);

  let priceScore = 0;
  
  let onTimeDeliveryScore = 0;
  let onTimeDeliveryScoreArray = [];
  for (let i = 0; i < suppliers.length; i++) {
    onTimeDeliveryScoreArray.push(suppliers[i].deliveryPerformance);
  }

  

  let qualityScore = 0;
  let communicationScore = 0;
  let flexibilityScore = 0;
  let innovationScore = 0;


  let hardFactsScore = priceScore + onTimeDeliveryScore + qualityScore;
  let softFactsScore = communicationScore + flexibilityScore + innovationScore;
  
  let totalScore = hardFactsScore + softFactsScore;
  let totalRating = "ausrechnen";

 
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }


  

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
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
                        {
                            (supplier.invoiceValue/invoiceSum * 100).toFixed(2)
                        }%
                      </td>
                    </tr>
                    <tr>
                      <td className="table-left">Total Score:</td>
                      <td className="table-right">{totalScore}</td>
                    </tr>
                    <tr>
                      <td className="table-left">Hard Facts Score:</td>
                      <td className="table-right">{hardFactsScore}</td>
                    </tr>
                    <tr>
                      <td className="table-left">Soft Facts Score:</td>
                      <td className="table-right">{softFactsScore}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer">Total Rating: {totalRating}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetail;
