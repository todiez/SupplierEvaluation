import React from "react";

const CardView = ({ suppliers }) => {
 
  
  //--- Calculation of invoiceSum of all suppliers
  //-->>> ABC analysis
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }

  //--- Sorting Supplier Array
  suppliers.sort((a, b) => {
    return b.totalScore - a.totalScore;
  });
 

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
