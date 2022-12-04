import React from 'react';
import ReduxVisualizer, { resetArray } from './ReduxVisualizer';

import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux";
import './App.css';

export function ReduxWrapper() {
    return (
        <Provider store={store}>
            <div className="App">
                <ReduxVisualizer></ReduxVisualizer>
            </div>
        </Provider>
    );
}






const todoReducer = (state = {
    array: resetArray(),
    reduxHistory: []
}, action) => {
    switch (action.type) {
        case "add":
            state = {
                ...state,
                array: [...state.array, action.payload],
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
        case "remove":
            const removeindex = state.array.indexOf(action.payload)
            let temp = state.array.splice(removeindex, 1)

            state = {
                ...state,
                array: state.array,
                // .map((task, index) => {
                //     console.log(index)
                //     return index === removeindex ? action.payload : task
                // }),
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
        case "updateHeight":
            state = {
                ...state,
                array: state.array,
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            state.array[action.index].height = action.height;
            break;
        case "updateColor":
            state = {
                ...state,
                array: state.array,
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            state.array[action.index].color = action.color;
            break;
    }
    return state;
};

export const store = createStore(combineReducers({ todoReducer }));

// store.subscribe(() => {
//     console.log("Store updated!", store.getState());
// });
