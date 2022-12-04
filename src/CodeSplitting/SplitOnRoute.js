import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

export const SplitOnRoute = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Link to="/OtherComponent">OtherComponent</Link>
    <br/>
    <Link to="/AnotherComponent">AnotherComponent</Link>
      <Switch>
        <Route exact path="/OtherComponent" component={OtherComponent}/>
        <Route path="/AnotherComponent" component={AnotherComponent}/>
      </Switch>
    </Suspense>
  </Router>
);


// Route-based code splitting
// Deciding where in your app to introduce code splitting can be a bit tricky. You want to make sure you choose places that will split bundles evenly, but won’t disrupt the user experience.

// A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time.

// Here’s an example of how to setup route-based code splitting into your app using libraries like React Router with React.lazy.

