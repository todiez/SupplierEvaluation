import useFetch from "./useFetch";
import CardView from "./CardView";
import TableView from "./TableView";
import Calc from "./Calc";

const Home = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");

  let test = (data && Calc(data));

  //console.log(test);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      {data && <TableView suppliers={test} />}
      {data && <CardView suppliers={test} />}
      
     
    </div>
  );
};

export default Home;
