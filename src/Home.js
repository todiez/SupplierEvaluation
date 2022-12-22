import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import SupplierCalc from "./SupplierCalc";
import Navbar from "./Navbar";
import TableView from "./TableView";

const Home = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      {data && <TableView suppliers={data} />}
      {data && <SupplierCalc suppliers={data} />}
    </div>
  );
};

export default Home;
