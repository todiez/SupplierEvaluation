import useFetch from "./useFetch";
import SupplierDetail from "./SupplierDetail";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  return (
    <div className="home">
      <h1>Home Component</h1>
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      {data && <SupplierDetail suppliers={data} supplierTitle="xyz" />}
    </div>
  );
};

export default Home;
