import React from "react";

const Table = ({ suppliers }) => {

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
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Supplier Code</th>
            <th scope="col">Annual Volume</th>
            <th scope="col">% of Total Volume</th>
            <th scope="col">Total Score</th>
            <th scope="col">Hard Facts Score</th>
            <th scope="col">Soft Facts Score</th>
            <th scope="col">Total Rating</th>
          </tr>
        </thead>
        {suppliers.map((supplier) => (
          <tbody key={supplier.id}>
            <tr>
              <th scope="row"></th>
              <td>{supplier.supplierName}</td>
              <td>{supplier.supplierCode}</td>
              <td>{supplier.invoiceValue}</td>
              <td>{((supplier.invoiceValue / invoiceSum) * 100).toFixed(2)}</td>
              <td>{supplier.totalScore}</td>
              <td>{supplier.hardFactsScore}</td>
              <td>{supplier.softFactsScore}</td>
              <td className={supplier.totalRating}>{supplier.totalRating}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
