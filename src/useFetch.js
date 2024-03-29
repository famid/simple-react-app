import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {

        fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Data could not fetched!!');
          }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(error => {
          console.log(error.message);
          setIsPending(false);
          setError(error.message);
          setData(null);
        });

      }, 1000);
      return () => console.log("Abort fetching data");
    }, [url]);
  
    
    return { data, isPending, error };
}

export default useFetch;

// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         } 
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//     }, 1000);
//   }, [url])

//   return { data, isPending, error };
// }
 
// export default useFetch;