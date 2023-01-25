import React, { useEffect } from "react";

const Table = ({ suppliers, fireSorting }) => {
  //suppliers.map needs to be rerendered with the supplierssorted array!
  return (
    <div className="table">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <button>Supplier Name</button>
            </th>
            <th scope="col">
              <button>Supplier Code</button>
            </th>
            <th scope="col">
              <button>Purchaser</button>
            </th>
            <th scope="col">
              <button>Annual Volume</button>
            </th>
            <th scope="col">
              <button onClick={() => fireSorting("abc")}>
                % of Total Volume
              </button>
            </th>
            <th scope="col">
              <button onClick={() => fireSorting("totalScore")}>
                Total Score
              </button>
            </th>
            <th scope="col">
              <button>Hard Facts Score</button>
            </th>
            <th scope="col">
              <button>Soft Facts Score</button>
            </th>
            <th scope="col">
              <button onClick={() => fireSorting("totalRating")}>
                Total Rating
              </button>
            </th>
          </tr>
        </thead>

        {suppliers.map((supplier, counter) => (
          <tbody key={supplier.id}>
            <tr>
              <th scope="row">{counter + 1}</th>
              <td>{supplier.supplierName}</td>
              <td>{supplier.supplierCode}</td>
              <td>{supplier.purchaser}</td>
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
