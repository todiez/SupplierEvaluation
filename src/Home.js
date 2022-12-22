import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Paz");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
  };

  let scoreArray = [0, 5, 10, 15, 20];
  let priceArray = [2, 0.3, -0.3, -2];
  let otdArray = [95, 90, 75, 60];
  let qualityArray = [98, 95, 90];

  return (
    <div className="home">
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            Current possible Scores per Catergory: {scoreArray}
            <br />
            Current boundaries in % for price changes: {priceArray}
            <br />
            Current boundaries for OnTime Delivery: {otdArray}
            <br />
            Current boundaries for Quality: {qualityArray}

          </div>



          <div class="col">
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
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="Paz">Paz</option>
                <option value="Ida">Ida</option>
              </select>
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
