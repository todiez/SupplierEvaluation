import useFetch from "./useFetch";
import SupplierDetail from "./SupplierDetail";
import { useEffect, useState } from "react";


const Home = () => {
const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");
//   const [data, setData] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(null);
   
//   useEffect(() => {
//     async function getData() {
//         const response = await fetch("http://localhost:8000/suppliers");
//         const json     = await response.json();
//         console.log(json);
//         setData(json);
//         setLoaded(true);
//     }
//     getData();
// },[])


  return (
    <div className="home">
      <h1>Home Component</h1>
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}

      {data && 
      
      (<SupplierDetail
      suppliers={data}
      supplierTitle="xyz"
      />
      )}

    </div>
  );
};

export default Home;
