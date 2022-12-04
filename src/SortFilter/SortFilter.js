import React, { useState } from 'react';
import { resetArray } from '../ReduxAlgoVisualizer/ReduxVisualizer';

let reversed = false

export class SortFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
        this.filterAbove = this.filterAbove.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    handleChange(event) {
        console.log(event.target.value)
        // this.setState({value: event.target.value});
    }

    filterAbove(event) {
        this.setState({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] })
        const numberToFilter = event.target.value;
        if (numberToFilter == "") return

        var newData = this.state.data.filter(function (number) {
            return number < numberToFilter;
        });
        this.setState({ data: newData })
    }

    sortReverse() {
        let temp = [];
        if (reversed) {
            console.log(reversed)
            temp = this.state.data.sort(function (a, b) { return a - b })
            this.setState({ data: temp })
        } else {
            console.log(reversed)
            temp = this.state.data.sort(function (a, b) { return b - a })
            this.setState({ data: temp })
        }
        reversed = !reversed;

        var cars = [
            { type: "Volvo", year: 2016 },
            { type: "Saab", year: 2001 },
            { type: "BMW", year: 2010 }
        ];

        let newcars = cars.sort(function (a, b) { return ('' + a.type).localeCompare(b.type); });
        //   cars.sort(function(a, b){
        //     let tempa = a.type.toLocaleLowerCase()
        //     let tempb = a.type.toLocaleLowerCase()  
        //     return a.type - b.type});
        console.log(newcars)
    }


    render() {
        return (
            <div className="SortFilter">
                <ul>
                    {this.state.data.map((value, index) => (
                        <li
                            className="array-bar"
                            key={index}
                            style={{
                                display: 'block'
                            }}>{value}</li>
                    ))}
                </ul>
                <label htmlFor='filter'>Filter above</label>
                <input type="number" name="filter" onChange={this.filterAbove} placeholder="filter above..."></input>

                <button onClick={(e) => { this.sortReverse() }}>sortReverse</button>
            </div>
        );
    }

}

