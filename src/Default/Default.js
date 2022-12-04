import React from 'react';
import logo from './logo.svg';
import './App.css';

function Default() {

const myfunc = function(){
  console.log('testing stuff')
}


  return (
    <div className="Default">
      
      <header className="Default-header">
        <img src={logo} className="Default-logo" alt="logo" />
        <p>
          Edit <code>src/Default.js</code> and save to reload.
        </p>
        <a
          className="Default-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
      <br/>
    </div>
  );
}

export default Default;
