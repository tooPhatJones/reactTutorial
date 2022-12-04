
import React,{ Component }  from 'react';
   
export class SimpleClassExample extends Component {
  
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ''};
  }
  
  handleTextChange(newText) {
    this.setState({text: newText});
  }
   
  render() {
    return (
        <React.Fragment>
          <B text={this.state.text} 
             handleTextChange={this.handleTextChange}/>
          <h4>{this.state.text}</h4>
        </React.Fragment>
    );
  }
}



  
class B extends Component {
constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
}
  
handleTextChange(e){
    this.props.handleTextChange(e.target.value);
}
  
render() {
    return (
        <input value={this.props.text} 
               onChange={this.handleTextChange} />
    );
}
}
      
  
