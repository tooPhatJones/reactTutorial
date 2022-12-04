import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AxiosCall } from './8AxiosCall/AxiosCall.js';
import Contact from './8AxiosCall/Dru.js';
import Default from './Default/Default.js';
import { ConditionalRender } from './9ConditionalRender/ConditionalRender.js'

import { PassingPropsDown } from './5passingPropsDown/PassingPropsDown.js'
import { ReactHotkeys } from './ReactHotkeys/ReactHotkeys.js'
import { ReduxWrapper } from './ReduxAlgoVisualizer/ReduxWrapper.js'
import { TestRouter } from './1testRouter/testRouter.js'
import { TestHook } from './3Hook/TestHook.js'
import { Proxy } from './Proxy/Proxy.js'
import { Redirect } from './Redirect/Redirect.js'
import { DragulaCLass, Dragulafucntion } from './Dragula/Dragula.js'
import { ClassExample } from './2ClassExample/ClassExample.js'
import { Fragment } from './Fragment/Fragment.js'
import { CodeSplitting } from './CodeSplitting/CodeSplitting.js'
import { SplitOnRoute } from './CodeSplitting/SplitOnRoute.js'
import { DemoErrorBoundary } from './ErrorBoundary/ErrorBoundary.js'
import { RenderProps } from './7RenderProps/RenderProps.js'
import { Context } from './Context/Context.js'
import { HOC } from './HOC/HOC.js'
import { PropTypesTest } from './PropTypes/PropTypes.js'
import { ReactBootstrap } from './ReactBootstrap/ReactBootstrap.js'
import { SortFilter } from './SortFilter/SortFilter.js'
import { SortWithSub } from './SortWithSub/SortWithSub.js'
import { InlineStyles } from './InlineStyles/InlineStyles.js'
import { HandleInputs } from './4HandleInputs/HandleInputs.js'
import { ReactBootstrapMultiselect } from './ReactBootstrapMultiselect/ReactBootstrapMultiselect.js'
import { FormsVSNoForms } from './4.5FormsVSNoForms/FormsVSNoForms.js'
import { Simpletable, MoreComplexReacttable } from './React-Table/React-Table.js'
import { FilterTable } from './React-Table/FilterTable.js'
import { SortTable } from './React-Table/SortTable.js'
import { PaginationTable } from './React-Table/PaginationTable.js'
import { OnGridReady } from './AgGrid/AgGrid.js'
import { ReactModal } from './ReactModal/ReactModal'
import { PassingPropsUp } from './6PassingPropsUp/PassingPropsUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/TestRouter">1TestRouter</Link>
          </li>
          <li>
            <Link to="/ClassExample">2ClassExample</Link>
          </li>
          <li>
            <Link to="/HandleInputs">4HandleInputs</Link>
          </li>
          <li>
            <Link to="/FormsVSNoForms">3FormsVSNoForms</Link>
          </li>
          <li>
            <Link to="/TestHook">4TestHook</Link>
          </li>
          <li>
            <Link to="/PassingPropsDown">5PassingPropsDown</Link>
          </li>
          <li>
            <Link to="/PassingPropsUp">6PassingPropsUp</Link>
          </li>
          <li>
            <Link to="/RenderProps">7RenderProps</Link>
          </li>
          <li>
            <Link to="/AxiosCall">8AxiosCall</Link>
          </li>
          <li>
            <Link to="/ConditionalRender">ConditionalRender</Link>
          </li>
          <li>
            <Link to="/OnGridReady">Ag-Grid</Link>
          </li>
     

          <li>
            <Link to="/CodeSplitting">CodeSplitting</Link>
          </li>
         
          <li>
            <Link to="/Context">Context</Link>
          </li>

          <li>
            <Link to="/">Default</Link>
          </li>
          <li>
            <Link to="/ReactHotkeys">ReactHotkeys</Link>
          </li>
          <li>
            <Link to="/ReduxWrapper">ReduxWrapper</Link>
          </li>


          <li>
            <Link to="/Proxy">Proxy</Link>
          </li>
          <li>
            <Link to="/Redirect">Redirect</Link>
          </li>
          <li>
            <Link to="/Dragula">Dragula</Link>
          </li>

          <li>
            <Link to="/Fragment">Fragment</Link>
          </li>

          <li>
            <Link to="/SplitOnRoute">SplitOnRoute</Link>
          </li>
          <li>
            <Link to="/DemoErrorBoundary">DemoErrorBoundary</Link>
          </li>
         

          <li>
            <Link to="/HOC">HOC</Link>
          </li>
          <li>
            <Link to="/PropTypes">PropTypes</Link>
          </li>
          <li>
            <Link to="/ReactBootstrap">ReactBootstrap</Link>
          </li>
          <li>
            <Link to="/SortFilter">SortFilter</Link>
          </li>
          <li>
            <Link to="/SortWithSub">SortWithSub</Link>
          </li>
          <li>
            <Link to="/InlineStyles">InlineStyles</Link>
          </li>
          
          <li>
            <Link to="/ReactBootstrapMultiselect">ReactBootstrapMultiselect</Link>
          </li>

          <li>
            <Link to="/ReactTable">ReactTable</Link>
          </li>

          <li>
            <Link to="/ReactModal">ReactModal</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/AxiosCall">
            <AxiosCall></AxiosCall>
            <Contact></Contact>
          </Route>
          <Route path="/ConditionalRender">
            <ConditionalRender />
          </Route>
        
          <Route path="/Default">
            <Default />
          </Route>
          <Route path="/PassingPropsDown">
            <PassingPropsDown />
          </Route>
          <Route path="/ReactHotkeys">
            <ReactHotkeys />
          </Route>
          <Route path="/ReduxWrapper">
            <ReduxWrapper />
          </Route>
          <Route path="/TestRouter">
            <TestRouter />
          </Route>
          <Route path="/TestHook">
            <TestHook />
          </Route>
          <Route path="/Proxy">
            <Proxy />
          </Route>
          <Route path="/Redirect">
            <Redirect />
          </Route>
          <Route path="/Dragula">
            <DragulaCLass />
            <Dragulafucntion />
          </Route>
          <Route path="/ClassExample">
            <ClassExample />
          </Route>
          <Route path="/Fragment">
            <Fragment />
          </Route>
          <Route path="/CodeSplitting">
            <CodeSplitting />
          </Route>
          <Route path="/SplitOnRoute">
            <SplitOnRoute />
          </Route>
          <Route path="/DemoErrorBoundary">
            <DemoErrorBoundary />
          </Route>
          <Route path="/RenderProps">
            <RenderProps />
          </Route>
          <Route path="/Context">
            <Context />
          </Route>
          <Route path="/HOC">
            <HOC />
          </Route>
          <Route path="/PropTypes">
            <PropTypesTest />
          </Route>
          <Route path="/ReactBootstrap">
            <ReactBootstrap />
          </Route>
          <Route path="/SortFilter">
            <SortFilter />
          </Route>
          <Route path="/SortWithSub">
            <SortWithSub />
          </Route>
          <Route path="/InlineStyles">
            <InlineStyles />
          </Route>
          <Route path="/HandleInputs">
            <HandleInputs />
          </Route>
          <Route path="/ReactBootstrapMultiselect">
            <ReactBootstrapMultiselect />
          </Route>
          <Route path="/FormsVSNoForms">
            <FormsVSNoForms />
          </Route>
          <Route path="/ReactTable">
            <h1>SimpleTable</h1>
            <Simpletable />
            <h1>Filter Table</h1>
            <FilterTable />
            <h1>SortTable</h1>
            click the column headers to sort
            <SortTable />
            <h1>Pagination Table</h1>
            <PaginationTable />
          </Route>
          <Route path="/OnGridReady">
            <OnGridReady />
          </Route>
          <Route path="/ReactModal">
            <ReactModal />
          </Route>
          <Route path="/PassingPropsUp">
            <PassingPropsUp />
          </Route>
          <Route path="/">
            <Default />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




