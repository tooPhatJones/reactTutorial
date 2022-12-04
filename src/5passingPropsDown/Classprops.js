import React from 'react'

export class Classprops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test1: 'test1',
            test2: 'test2'
        }
    }
    render() {
        return (
            <div>
                <PropsNoConstructor testValues={this.state} />
            </div>
        );
    }
}

export class PropsNoConstructor extends React.Component {
    //if you omit the constructor you can still use this.props. 
    //however, if you want to use state, then you have to create a constructor, pass props to it, and also use super(props) before you declare your state
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.testValues.test1}</li>
                    <li>{this.props.testValues.test2}</li>

                </ul>
                Below is receiving props with a constructor
                <PropsWithConstructor val ={this.props.testValues}/>
                {/* you cant directly destructure something like this
                 <PropsWithConstructor {this.props.testValues}/> */}
                {/* 
                you cant spread the props either, not sure why
                <PropsWithConstructor val ={...this.props.testValues}/> 
                */}
            </div>
        );
    }
}

export class PropsWithConstructor extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                <ul>
                    {/* <li>{this.props.testValues.test1}</li>
                    <li>{this.props.testValues.test2}</li> */}
                </ul>
            </div>
        );
    }
}