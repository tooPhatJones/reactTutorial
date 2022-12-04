import React from 'react';
import axios from 'axios'


export function Proxy() {

  const test = function () {
    console.log('test')
//when hitting localhost its important to include the http://localhost:8080
//localhost:8080 by itself wont work
    axios.get("/ping", { testvalue: "this is a test string" })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="testAxios">
      <button onClick={()=>test()}>test proxy</button>
    </div>
  );
}


