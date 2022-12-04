
import React from 'react';
import cat from './cat.jpg'

// The <Mouse> component encapsulates the behavior we need...
 class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
        <div>X coordinates {this.state.x}</div>
        <div>Y coordinates {this.state.y}</div>
      </div>
    );
  }
}

export class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (<Cat mouse={mouse} />)}/>
      </div>
    );
  }
}

// Render Props 
//https://reactjs.org/docs/render-props.html
// The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

// A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

// <DataProvider render={data => (
//     <h1>Hello {data.target}</h1>
//   )}/>
// Libraries that use render props include React Router, Downshift and Formik.

// In this document, we’ll discuss why render props are useful, and how to write your own.

// Use Render Props for Cross-Cutting Concerns
// Components are the primary unit of code reuse in React, but it’s not always obvious how to share the state or behavior that one component encapsulates to other components that need that same state.

// One interesting thing to note about render props is that you can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a <Mouse> component, you could easily create one using a regular <Mouse> with a render prop:

// // If you really want a HOC for some reason, you can easily
// // create one using a regular component with a render prop!
// function withMouse(Component) {
//   return class extends React.Component {
//     render() {
//       return (
//         <Mouse render={mouse => (
//           <Component {...this.props} mouse={mouse} />
//         )}/>
//       );
//     }
//   }
// }