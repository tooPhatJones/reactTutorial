import React from 'react';
export class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      number1: 0
    };
    this.arrowFunction = this.arrowFunction.bind(this)
    this.setStateReturnNothing = this.setStateReturnNothing.bind(this)
    //the rule seems to be, if you are going to access this.setState() in any of your functions, you have to bind them. Thats why you always see your updateHandlers bound.
  }

  // NOTE: you cannot use the function keyword in a class, everything must be a class method
  // function test(){
  //   return <p>this is a test</p>
  // }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  notBound() {
    return <p>this method is not bound in the constructor</p>
  }

  arrowFunction = () => {
    return <p>this method is an arrow function</p>
  };
// arrow functions are weird, they have to be bound because they have different rulse for the this keyword. Maybe its better not to use them.
  returnArrowFunction() {
    return this.arrowFunction()
  }

  returnState() {
    return this.state.date
  }
  //this function does not work unless it is bound because it uses this.setState()
  setStateReturnNothing() {
    this.setState({ number1: this.state.number1 += 1 })
  }



  render() {
    return (
      <div>
        {this.notBound()}
        {/* note the extreamly funky syntax below. This is required if you dont bind the arrow function in the constructor. However you only have to bind it if you want to use it in the render function  */}
        {this.arrowFunction.bind(this)()}
        {/* the below method works without being bound, and called the arrow function just fine. So you only have to bind arrow functions if you use them in the render function */}
        {this.returnArrowFunction()}
        {this.returnState().toString()}
        <br></br>
        <button onClick={this.setStateReturnNothing}> click me to increase the number</button>
        {this.state.number1}
      </div>
    );
  }
}