
import React, { useState } from 'react';

export function SimpleFunctionalExample (){
    const [text, setText] = useState('');
    return(
        <div>
            <B text={text} setText={setText}></B>
            <h1>{text}</h1>
        </div>
    );
}
export function B (props){
   
    return(
        <div>
            <input type='text' value={props.text} placeholder='changeme' onChange={e=> props.setText(e.target.value)}></input>
        </div>
    );
}

