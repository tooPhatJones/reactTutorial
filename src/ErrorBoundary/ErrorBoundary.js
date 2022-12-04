import React, { Suspense } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  
  class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }
  
  export function DemoErrorBoundary() {
    return (
      <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      </div>
    );
  }
  



// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

// Note

// Error boundaries do not catch errors for:

// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)
// A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

// Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

// Note that error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how catch {} block works in JavaScript.

// Where to Place Error Boundaries
// The granularity of error boundaries is up to you. You may wrap top-level route components to display a “Something went wrong” message to the user, just like server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.

// New Behavior for Uncaught Errors
// This change has an important implication. As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.

// We debated this decision, but in our experience it is worse to leave corrupted UI in place than to completely remove it. For example, in a product like Messenger leaving the broken UI visible could lead to somebody sending a message to the wrong person. Similarly, it is worse for a payments app to display a wrong amount than to render nothing.

// This change means that as you migrate to React 16, you will likely uncover existing crashes in your application that have been unnoticed before. Adding error boundaries lets you provide better user experience when something goes wrong.

// For example, Facebook Messenger wraps content of the sidebar, the info panel, the conversation log, and the message input into separate error boundaries. If some component in one of these UI areas crashes, the rest of them remain interactive.

// We also encourage you to use JS error reporting services (or build your own) so that you can learn about unhandled exceptions as they happen in production, and fix them.

// Component Stack Traces
// React 16 prints all errors that occurred during rendering to the console in development, even if the application accidentally swallows them. In addition to the error message and the JavaScript stack, it also provides component stack traces. Now you can see where exactly in the component tree the failure has happened:

// Error caught by Error Boundary component
// You can also see the filenames and line numbers in the component stack trace. This works by default in Create React App projects:

// Error caught by Error Boundary component with line numbers
// If you don’t use Create React App, you can add this plugin manually to your Babel configuration. Note that it’s intended only for development and must be disabled in production.

// Note
// Component names displayed in the stack traces depend on the Function.name property. If you support older browsers and devices which may not yet provide this natively (e.g. IE 11), consider including a Function.name polyfill in your bundled application, such as function.name-polyfill. Alternatively, you may explicitly set the displayName property on all your components.

// How About Event Handlers?
// Error boundaries do not catch errors inside event handlers.

// React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

// If you need to catch an error inside event handler, use the regular JavaScript try / catch statement: