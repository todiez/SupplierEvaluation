import { useState } from "react";
import useFetch from "./useFetch";

const Home = () => {
  const [isPending, setIsPending] = useState(false);

  const { data, loaded, error } = useFetch("http://localhost:8001/calcBasis");

   

  const otdBoundary01 = (data && data[0].otdBoundary1);
  console.log(otdBoundary01);

  const [priceBoundary1, setPriceBoundary1] = useState(2.1);
  const [priceBoundary2, setPriceBoundary2] = useState(0.3);
  const [priceBoundary3, setPriceBoundary3] = useState(-0.3);
  const [priceBoundary4, setPriceBoundary4] = useState(-2.1);

  const [otdBoundary1, setOtdBoundary1] = useState(9);
  const [otdBoundary2, setOtdBoundary2] = useState(90);
  const [otdBoundary3, setOtdBoundary3] = useState(75);
  const [otdBoundary4, setOtdBoundary4] = useState(60);

  const [qBoundary1, setQBoundary1] = useState(98);
  const [qBoundary2, setQBoundary2] = useState(95);
  const [qBoundary3, setQBoundary3] = useState(92);
  const [qBoundary4, setQBoundary4] = useState(90);

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(5);
  const [score3, setScore3] = useState(10);
  const [score4, setScore4] = useState(15);
  const [score5, setScore5] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('adjusting values button fired');    
    setIsPending(true);

    const calcBasis = {test: '123'};

    
    
    
    fetch("http://localhost:8001/calcBasis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(calcBasis),
      }
    )
    .then(() => {
        console.log('CalcBasis updated')
        setIsPending(false);
        //history.push('/');
    });

    fetch("http://localhost:8001/calcBasis/1", {
      method: "DELETE"
  
    });


  };

  //Link to percentage input
  //https://codepen.io/tomasMetcalfe/pen/poojJLE
  return (
    <div className="home">
      <div className="container text-center">
        <div className="row align-item-start">
          <div className="col">
            <form>
              <label>Max Score</label>
              <input
                type="number"
                required
                value={score5}
                onChange={(e) => setScore5(e.target.value)} //makes changes in the input field possible
              />
              <label>Score 4</label>
              <input
                type="number"
                required
                value={score4}
                onChange={(e) => setScore4(e.target.value)} //makes changes in the input field possible
              />
              <label>Score 3</label>
              <input
                type="number"
                required
                value={score3}
                onChange={(e) => setScore3(e.target.value)} //makes changes in the input field possible
              />
              <label>Score 2</label>
              <input
                type="number"
                required
                value={score2}
                onChange={(e) => setScore2(e.target.value)} //makes changes in the input field possible
              />
              <label>Min Score</label>
              <input
                type="number"
                required
                value={score1}
                onChange={(e) => setScore1(e.target.value)} //makes changes in the input field possible
              />
            </form>
          </div>

          <div className="col">
            <form>
              <br />
              <label>Price Boundary 1</label>
              <input
                type="number"
                required
                value={priceBoundary4}
                onChange={(e) => setPriceBoundary4(e.target.value)} //makes changes in the input field possible
              />
              <label>Price Boundary 2</label>
              <input
                type="number"
                required
                value={priceBoundary3}
                onChange={(e) => setPriceBoundary3(e.target.value)} //makes changes in the input field possible
              />
              <label>Price Boundary 3</label>
              <input
                type="number"
                required
                value={priceBoundary2}
                onChange={(e) => setPriceBoundary2(e.target.value)} //makes changes in the input field possible
              />
              <label>Price Boundary 4</label>
              <input
                type="number"
                required
                value={priceBoundary1}
                onChange={(e) => setPriceBoundary1(e.target.value)} //makes changes in the input field possible
              />
            </form>
          </div>

          <div className="col">
            <form>
              <br />
              <label>OTD Boundary 1</label>
              <input
                type="number"
                required
                value={otdBoundary1}
                onChange={(e) => setOtdBoundary1(e.target.value)} //makes changes in the input field possible
              />
              <label>OTD Boundary 2</label>
              <input
                type="number"
                required
                value={otdBoundary2}
                onChange={(e) => setOtdBoundary2(e.target.value)} //makes changes in the input field possible
              />
              <label>OTD Boundary 3</label>
              <input
                type="number"
                required
                value={otdBoundary3}
                onChange={(e) => setOtdBoundary3(e.target.value)} //makes changes in the input field possible
              />
              <label>OTD Boundary 4</label>
              <input
                type="number"
                required
                value={otdBoundary4}
                onChange={(e) => setOtdBoundary4(e.target.value)} //makes changes in the input field possible
              />
            </form>
          </div>

          <div className="col">
            <form>
              <br />
              <label>Quality Boundary 1</label>
              <input
                type="number"
                required
                value={qBoundary1}
                onChange={(e) => setQBoundary1(e.target.value)} //makes changes in the input field possible
              />
              <label>Quality Boundary 2</label>
              <input
                type="number"
                required
                value={qBoundary2}
                onChange={(e) => setQBoundary2(e.target.value)} //makes changes in the input field possible
              />
              <label>Quality Boundary 3</label>
              <input
                type="number"
                required
                value={qBoundary3}
                onChange={(e) => setQBoundary3(e.target.value)} //makes changes in the input field possible
              />
              <label>Quality Boundary 4</label>
              <input
                type="number"
                required
                value={qBoundary4}
                onChange={(e) => setQBoundary4(e.target.value)} //makes changes in the input field possible
              />
            </form>
          </div>
          <div>
            {!isPending && (
              <button onClick={handleSubmit}>Adjust Values</button>
            )}
            {isPending && <button disabled>Adjusting Valuess...</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
