import React from "react";

const SupplierDetail = ({ suppliers }) => {
  console.log(suppliers[0].supplierName);

  let percentageOfTotalInvoices = "ausrechnen";
  let totalScore = "ausrechnen";
  let hardFactsScore = "ausrechnen";
  let softFactsScore = "ausrechnen";
  let totalRating = "ausrechnen";

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4"></div>
      {suppliers.map((supplier) => (
        <div className="supplier-score-card" key={supplier.id}>
          <div class="col">
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
                          {percentageOfTotalInvoices}
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
        </div>
      ))}
    </div>
  );
};

export default SupplierDetail;
