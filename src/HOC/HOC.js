import React, { Component } from 'react';
import './ButtonOne';
import ButtonOne from './ButtonOne';

export class HOC extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
      </div>
    );
  }
}

export default HOC;
