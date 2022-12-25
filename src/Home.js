import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState(["score", 0, 5, 10, 15, 20]);
  const [body, setBody] = useState("");
  const [score, setScore] = useState("Paz");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, score };
    setIsPending(true);
  };

  let scoreArray = ["score", 0, 5, 10, 15, 20];
  let priceArray = ["price", 2, 0.3, -0.3, -2];
  let otdArray = ["otd", 95, 90, 75, 60];
  let qualityArray = ["quality", 98, 95, 90];

  let Array = [];
  Array.push(scoreArray);
  Array.push(priceArray);
  Array.push(otdArray);
  Array.push(qualityArray);

  console.log(Array);

  //Link to percentage input
  //https://codepen.io/tomasMetcalfe/pen/poojJLE
  return (
    <div className="home">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            Current achievable scores per catergory: {scoreArray}
            <br />
            Current boundaries in % for price changes: {priceArray}
            <br />
            Current boundaries for OnTime Delivery: {otdArray}
            <br />
            Current boundaries for Quality: {qualityArray}
          </div>

          <div className="col">
            <form>
              <label>Score:</label>
              <label>Price Boundary 1</label> 
               <input
                type="number"
                required
                value={priceArray[1]}
                onChange={(e) => setTitle(e.target.value)} //makes changes in the input field possible
              />



              <label>Price Boundary 2</label>
              <input type="number"></input>
              <label>Price Boundary 3</label>
              <input type="number"></input>
              <label>Price Boundary 4</label>
              <input type="number"></input>
            </form>
          </div>

          <div className="col">
            <form>
              <label>Score:</label>
              <select value={score} onChange={(e) => setScore(e.target.value)}>
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </form>
          </div>

          <div className="col">
            <form onSubmit={handleSubmit}>
              <label>Blog Title:</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} //makes changes in the input field possible
              />
              <label>Blog Body:</label>
              <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} //makes changes in the input field possible
              ></textarea>
              <label>Blog Author:</label>
              {/* <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="Paz">Paz</option>
                <option value="Ida">Ida</option>
              </select> */}
              {!isPending && <button>Add Blog</button>}
              {isPending && <button disabled>Adding Blog...</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
