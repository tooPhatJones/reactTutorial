import React, { useState } from 'react';

import { store } from './ReduxWrapper'
import { connect } from "react-redux";
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

let VariableAnimationSpeed = 0;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// have to promisify the setTimeout Method so we can use it with async await.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const resetArray = function () {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        var obj = {
            height: randomIntFromInterval(5, 730),
            color: PRIMARY_COLOR,
        }
        array.push(obj);
    }
    return array;
}

function ReduxVisualizer(props) {
    
    const [array, updateAray] = useState(props.todoReducer.array);

    async function bubbleSort() {
        for (let i = 0; i < array.length - 1; i++) {
            let b = 0;
            console.log(`outer loop: ${i}`)
            while (b < array.length - i - 1) {
                console.log(`inner loop: ${b}`)
                if (array[b].height > array[b + 1].height) {
                    let temp1 = array[b].height;
                    let temp2 = array[b + 1].height;
                    array[b + 1].height = temp1;
                    props.updateHeight({
                        index: b+1,
                        height: temp1
                      })
                    // array[b].height = temp2;
                    props.updateHeight({
                        index: b,
                        height: temp2
                      })
                } 
               // array[b + 1].backgroundColor = SECONDARY_COLOR;
               props.updateColor({
                index: b + 1,
                color: SECONDARY_COLOR
              })
               // array[b].backgroundColor = PRIMARY_COLOR;
                props.updateColor({
                    index: b,
                    color: PRIMARY_COLOR
                  })
                await sleep(VariableAnimationSpeed)
                ++b;
            }
        };
        props.updateColor({
            index: 0,
            color: SECONDARY_COLOR
          })
    }




    return (
        <div className="array-container">
            {array.map((value, index) => (
                <div
                    className="array-bar"
                    key={index}
                    style={{
                        backgroundColor: value.color,
                        height: `${value.height}px`,
                    }}></div>
            ))}
            <button onClick={() => resetArray()}>Generate New Array</button>
            <button onClick={() => bubbleSort()}>Bubble Sort</button>
        </div>
    );
}


const mapStateToProps = state => {
    return store.getState();
};

export const addTodo = content => ({
    type: "add",
    payload: content
});

export const removeTodo = content => ({
    type: "remove",
    payload: content
});

export const updateHeight = content => ({
    type: "updateHeight",
    index: content.index,
    height: content.height
  });
  
  export const updateColor = content => ({
    type: "updateColor",
    index: content.index,
    color: content.color
  });


export default connect(
    mapStateToProps,
    { addTodo, removeTodo, updateHeight, updateColor }
)(ReduxVisualizer);

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}
