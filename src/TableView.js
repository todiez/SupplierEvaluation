import useFetch from "./useFetch";
import Table from "./Table";
import Calc from "./Calc";

const TableView = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  let suppliers = data && Calc(data);



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div className="loading">Loading...</div>}


      {data && <Table suppliers={suppliers} />}
    </div>
  );
};

export default TableView;
