import useFetch from "./useFetch";
import Table from "./Table";
import Calc from "./Calc";
import { useEffect, useState } from "react";

const TableView = () => {
  const [suppliers, setSuppliers] = useState(null);

  


  //getting data from server
  useEffect(
      async () => {
        console.log("inside TableView")
    // const { data, loaded, error } = await fetch(
    //   "http://localhost:8000/supplierData"
    // )
    const data = fetch(
      "http://localhost:8000/supplierData"
    );
    const cleanData = data.json();
    console.log("TableView Data: " + cleanData);
      setSuppliers(cleanData);
    // const test = Calc(data);
    // setSuppliers(test);
  }, []);






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
  };

  //displaying the array of objects
  return (
    <div className="home">
      {/* {error && <div>{error}</div>}
      {!loaded && <div className="loading">Loading...</div>} */}
      {/* Table component displaying */}
      {
        <Table
          suppliers={suppliers ? suppliers : ""}
          fireSorting={fireSorting}
        />
      }
    </div>
  );
};

export default TableView;
