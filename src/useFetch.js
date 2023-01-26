import { useEffect, useState } from "react";

const useFetch = (url) => {
  //this is a custom hook, therefore it needs to start with use...

  console.log("use fetch started");
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // const getData =  async () => {
  //   const response = await fetch(url);
  //   console.log(response.message)
  //   if (response.status !== 200) {
  //     setLoaded(false);
  //     throw new Error("Cannot fetch data");
  //   }
  //   const data = await response.json();
  //   console.log(data);
  //   setData(data);
  //   setLoaded(true);

  // }
  // getData();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      console.log(response.message);
      if (response.status !== 200) {
        throw new Error("Cannot fetch data");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    getData()
      .then((dataFetch) => {
        console.log(dataFetch);
        setData(dataFetch);
        setLoaded(true);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setLoaded(true);
        setError(err.message);
      });
  }, []);

  console.log("useFetch: " + data);

  return {
    //returning as object of my custom hook
    data,
    loaded,
    error
  };
};

export default useFetch;
