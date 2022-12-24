import React from "react";

const Table = ({ suppliers }) => {

  //--- Calculation of invoiceSum of all suppliers
  //-->>> ABC analysis
  let invoiceSum = 0;
  for (let i = 0; i < suppliers.length; i++) {
    invoiceSum += suppliers[i].invoiceValue;
  }
  console.log(suppliers)

  //--- Sorting Supplier Array
  const fireSorting = (sorting) => {
    console.log(sorting)
  const suppliersSorted = suppliers.sort((a, b) => {

    switch (sorting) {
      case 'totalScore' : return b.totalScore - a.totalScore;

      default : return;
   
    }       

    return (
    
      <div className="table">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><button>Supplier Name</button></th>
              <th scope="col"><button>Supplier Code</button></th>
              <th scope="col"><button>Purchaser</button></th>
              <th scope="col"><button>Annual Volume</button></th>
              <th scope="col"><button>% of Total Volume</button></th>
              <th scope="col"><button onClick={() => fireSorting('totalScore')}>Total Score</button></th>
              <th scope="col"><button>Hard Facts Score</button></th>
              <th scope="col"><button>Soft Facts Score</button></th>
              <th scope="col"><button>Total Rating</button></th>
            </tr>
          </thead>
          
          {suppliers.map((supplier, counter) => (
            
            <tbody key={supplier.id}>
              <tr>
                <th scope="row">{counter+1}</th>
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

    
  
  });

  console.log('firesorting fired');
  console.log(suppliersSorted);
};

  return (
    
    <div className="table">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><button>Supplier Name</button></th>
            <th scope="col"><button>Supplier Code</button></th>
            <th scope="col"><button>Purchaser</button></th>
            <th scope="col"><button>Annual Volume</button></th>
            <th scope="col"><button>% of Total Volume</button></th>
            <th scope="col"><button onClick={() => fireSorting('totalScore')}>Total Score</button></th>
            <th scope="col"><button>Hard Facts Score</button></th>
            <th scope="col"><button>Soft Facts Score</button></th>
            <th scope="col"><button>Total Rating</button></th>
          </tr>
        </thead>
        
        {suppliers.map((supplier, counter) => (
          
          <tbody key={supplier.id}>
            <tr>
              <th scope="row">{counter+1}</th>
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
