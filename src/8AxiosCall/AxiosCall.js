import React from 'react';
import axios from 'axios'


export function AxiosCall() {

  const test = function () {
    console.log('test')

    axios.get("http://localhost:4000/email", { testvalue: "this is a test string" })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="testAxios">
      <button onClick={()=>test()}>test axios</button>
    </div>
  );
}


