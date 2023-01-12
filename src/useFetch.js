import { useEffect, useState } from "react";

const useFetch = (url) => {
  //this is a custom hook, therefore it needs to start with use...

  console.log("use fetch started")
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  console.log(data);
 
  // useEffect(() => { 
  //   setTimeout(() => { 
  //   fetch(url)
  //   .then((resp) => {
  //     if (!resp.ok) {
  //       throw Error("Could not fetch data");
  //     }
  //     return resp.json();
  //   })
  //   .then((dataFetch) => {
        
  //     setData(dataFetch);
  //     setLoaded(true);
  //     setError(null);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     setLoaded(true);
  //     setError(err.message);
  //   });
  // },300)
   
  // }, [url]);

useEffect(() => {
  const getData =  async () => {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot fetch data");
    }
    const data = await response.json();
    return data;
  }
  getData()
  .then((dataFetch) => {
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





  return {
    //returning as object of my custom hook
    data,
    loaded,
    error    
  };
};

export default useFetch;
