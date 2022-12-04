import React, { useState } from 'react';
import { LiftingUpState } from './LiftingUpState'
import { SimpleClassExample as SimpleClassExample } from './SimpleClassExample'
import { SimpleFunctionalExample } from './SimpleFunctionalExample'

export function PassingPropsUp() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <div id='SimpleFunctionalExample'>
                <h2>best version</h2>
                <p>Functional version of the below green box</p>
                <SimpleFunctionalExample />
            </div>

            <div id='SimpleClassExample'>
                <p>simple class example i found on <a href='https://www.geeksforgeeks.org/lifting-state-up-in-reactjs/'>geeksforgeeks</a></p>
                <SimpleClassExample />
            </div>

            <div id="LiftingUpState">

                <p>This example is from the react documentation <a href='https://reactjs.org/docs/lifting-state-up.html'>Lifting up state</a>and its way the fuck too complicated</p>
                <LiftingUpState />
            </div>
        </div>
    );
}

