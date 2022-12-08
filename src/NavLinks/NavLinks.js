import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { NavLink1 } from './NavLink1';
import { NavLink2 } from './NavLink2';
import { NavLink3 } from './NavLink3';

export function NavLinks() {
    return (
        <div>
            <h1>NavLinks</h1>
            <ul> {/* An unordered menu of links.  The active component will be dark green. URLs are specified in the (sub-)router below */}
                <li>
                    <NavLink to="/NavLinks/Link1" activeStyle={{color: 'darkgreen', fontWeight: 'bold'}}>NavLink1</NavLink>
                    {/* Note: In React Router Dom 6, you would use the style prop with a destructured callback returning an inline style as follows:
                    
                    <NavLink to="/NavLinks/Link1" style={({ isActive }) => ({
                        color: isActive ? 'darkgreen' : '#007bff'
                    })}>NavLink1</NavLink>
                    
                    */}
                </li>
                <li>
                    <NavLink to="/NavLinks/Link2" activeStyle={{ color: 'darkgreen', fontWeight: 'bold' }}>NavLink2</NavLink>
                </li>
                <li>
                    <NavLink to="/NavLinks/Link3" activeStyle={{ color: 'darkgreen', fontWeight: 'bold' }}>NavLink3</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/NavLinks/Link1">
                    <NavLink1 />
                </Route>
                <Route path="/NavLinks/Link2">
                    <NavLink2 />
                </Route>
                <Route path="/NavLinks/Link3">
                    <NavLink3 />
                </Route>
            </Switch>
        </div>
    );
}
// What happens if you click a link to the current URL? It would just reload the page.
// NavLinks are like regular links, but they are aware of the current URL.
// If a NavLink points to the current URL, it will
// have the style specified by activeStyle. They are most useful when part of a list
// of links to show the currently selected component.