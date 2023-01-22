import useFetch from "./useFetch";
import Table from "./Table";
import Calc from "./Calc";
import { useState } from "react";

const TableView = () => {
  //getting data from server
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  // const [suppliers, setSuppliers] = useState(data);
  // let test = data && Calc(data);
  // setSuppliers(test);

  //use state instead of this
  let suppliers = data && Calc(data);

  //something with async/await??!?!

  console.log(suppliers);

  //--- Sorting Supplier Array -->> send in sortedBy as props
  const fireSorting = (sorting) => {
    console.log(sorting);
    const suppliersSorted = suppliers.sort((a, b) => {
      switch (sorting) {
        case "totalScore":
          return b.totalScore - a.totalScore;
        case "abc":
          return b.abc - a.abc;
        case "totalRating":
          return b.totalRating - a.totalRating;
      }
    });
    console.log("fireSorting fired");
    console.log(suppliersSorted);
   
  };

  data && fireSorting("totalScore");

  //displaying the array of objects
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div className="loading">Loading...</div>}

      {/* Table component displaying */}
      {data && <Table suppliers={suppliers} fireSorting={fireSorting} />}
      {/* {data && <Table suppliers={suppliers} sortedBy={setSortedBy} fireSortingEvent={fireSorting}/>} */}
      {/* pass in something more than supplier */}
    </div>
  );
};

export default TableView;
