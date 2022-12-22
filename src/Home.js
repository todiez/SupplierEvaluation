import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import SupplierOverview from "./SupplierOverview";
import SupplierCalc from "./SupplierCalc";

const Home = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      {data && <SupplierCalc suppliers={data} />}
    </div>
  );
};

export default Home;
