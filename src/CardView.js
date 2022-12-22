import useFetch from "./useFetch";
import Calc from "./Calc";
import Card from "./Card";

const CardView = () => {
  const { data, loaded, error } = useFetch("http://localhost:8000/suppliers");
  
  let test = (data && Calc(data));

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}
      
      {data && <Card suppliers={test} />}
     
           
    </div>
  );
};

export default CardView;