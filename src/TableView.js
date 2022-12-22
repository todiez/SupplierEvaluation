import useFetch from "./useFetch";
import Table from "./Table";
import Calc from "./Calc";

const TableView = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  let test = (data && Calc(data));

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      
      {data && <Table suppliers={test} />}
     
           
    </div>
  );
};

export default TableView;