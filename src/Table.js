import React from "react";

const Table = ({ suppliers }) => {

  //--- Calculation of invoiceSum of all suppliers
  //-->>> ABC analysis
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }
  console.log(suppliers);

  //--- Sorting Supplier Array
  suppliers.sort((a, b) => {
    return b.abc - a.abc;
  });

  return (
    
    <div className="table">
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
        
        {suppliers.map((supplier, counter) => (
          
          <tbody key={supplier.id}>
            <tr>
              <th scope="row">{counter+1}</th>
              <td>{supplier.supplierName}</td>
              <td>{supplier.supplierCode}</td>
              <td>{supplier.invoiceValue}</td>
              <td>{supplier.abc}</td>
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
