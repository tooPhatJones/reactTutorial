import React, { useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import dragula from 'react-dragula';
import './dragula.css'
export class DragulaCLass extends React.Component {

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      dragula([componentBackingInstance], options);
    }
  };

  render() {
    return (<div className='container' ref={this.dragulaDecorator}>
      <div className="draggable">Swap me around</div>
      <div className="draggable">Swap her around</div>
      <div className="draggable"> Swap him around</div>
      <div className="draggable">Swap them around</div>
      <div className="draggable">Swap us around</div>
      <div className="draggable">Swap things around</div>
      <div className="draggable">Swap everything around</div>
    </div>
    )
  }
};

export function Dragulafucntion() {
  useEffect(() => {
    var first = "#first";
    var second = "#second";
    var third = "#third";

    var containers = [
      document.querySelector(first),
      document.querySelector(second),
      document.querySelector(third),
    ];

    var drake = dragula(containers);
    drake.on("drop", (el, target) => {});
  }, []);

  let outerstyle ={
    border: "solid",
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
  }
  
  let innerstyle ={
    width: '10px',
    height: '10px',
    backgroundColor: 'blue'
  }

  return (
    <div>
      <div style={outerstyle}  id="first">
        <span className="draggable" style={innerstyle}>drag me</span>
      </div>
      <div style={outerstyle} id="second"></div>
      <div style={outerstyle} id="third"></div>
    </div>
  );
}

