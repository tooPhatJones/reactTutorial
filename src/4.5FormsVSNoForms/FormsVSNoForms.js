import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

export function FormsVSNoForms() {
    return (
        <div className="FormsVSNoForms">
            <FlavorFormFunction />
            <NoFormFunction />
            <FlavorFormClass />
            <NoFormclass />
        </div>
    );
}

function FlavorFormFunction() {
    let [value, setValue] = useState('coconut')

    const handleSubmit = function (event) {
        alert('Your favorite flavor is: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <h1>form, handlechange and handlesubmit functional</h1>
            <label>
                Pick your favorite flavor:
                <select value={value} onChange={e => setValue(e.target.value)}>
                    <option value="grapefruit3">Grapefruit3</option>
                    <option value="lime3">Lime3</option>
                    <option value="coconut3">Coconut3</option>
                    <option value="mango3">Mango3</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}


function NoFormFunction() {
    let [value, setValue] = useState('coconut')
    const handleSubmit2 = function () {
        alert('Your favorite flavor is: ' + value);
    }

    return (
        <div >
            <h1>without form, handlechange and handlesubmit functional</h1>
            <label>
                Pick your favorite flavor:
                <select value={value} onChange={e => setValue(e.target.value)}>
                    <option value="grapefruit4">Grapefruit4</option>
                    <option value="lime4">Lime4</option>
                    <option value="coconut4">Coconut4</option>
                    <option value="mango4">Mango4</option>
                </select>
            </label>
            {/* Here if I had passed handleSubmit2() to the onclick, instead of handleSubmit2, it will act very funny. Very important to remember to leave the parenthesis off here. */}
            <button onClick={handleSubmit2}>submit</button>
        </div>
    );
}



class FlavorFormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        //if you unbind this handleSubmit it no longer works but i have no idea why since the same sort of thing works great other places.
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // need event.preventDefault(); because otherwise the form submission will reload the page by default.
        
        console.log('Your favorite flavor is: ' + this.state.value);
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>form, handlechange and handlesubmit class based</h1>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


class NoFormclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    handleChange2(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit2() {
        alert('Your favorite flavor is: ' + this.state.value);
        //no need for preventdefault because there is no form. The page will not automatically reload.
    }

    render() {
        return (
            <div >
                <h1>without form, handlechange and handlesubmit class based</h1>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange2}>
                        <option value="grapefruit2">Grapefruit2</option>
                        <option value="lime2">Lime2</option>
                        <option value="coconut2">Coconut2</option>
                        <option value="mango2">Mango2</option>
                    </select>
                </label>
                {/* Here is I had passed this.handleSubmit2() to the onclick, instead of this.handleSubmit2, it will act very funny. Very important to remember to leave the parenthesis off here. */}
                <button onClick={this.handleSubmit2}>submit</button>
            </div>
        );
    }
}

