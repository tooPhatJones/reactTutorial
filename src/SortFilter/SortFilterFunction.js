import React, { useState } from 'react';
import { resetArray } from '../ReduxAlgoVisualizer/ReduxVisualizer';

let reversed = false

export  function SortFilter()  {
     const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    const filterAbove = function(event) {
        setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])        
        const numberToFilter = event.target.value;
        if(numberToFilter == "") return

        var newData =data.filter(function (number) {
            return number < numberToFilter;
        });
        setData(newData)
    }

    const sortReverse = function() {
        let temp = [];
        if (reversed) {
            temp = data.sort(function (a, b) { return a - b })
        } else {
            temp = data.sort(function (a, b) { return b - a })
        }
        console.log(temp)
        //for some reason this setData() is not working!!!!!
        setData(temp)
        reversed = !reversed;
    }
        return (
            <div className="SortFilter">
                <ul>
                    {data.map((value, index) => (
                        <li
                            className="array-bar"
                            key={index}
                            style={{
                                display: 'block'
                            }}>{value}</li>
                    ))}
                </ul>
                <label htmlFor='filter'>Filter above</label>
                <input type="number" name="filter" onChange={(e) =>{filterAbove(e)}} placeholder="filter above..."></input>
                <button onClick={(e) => { sortReverse() }}>sortReverse</button>
            </div>
        );

}

