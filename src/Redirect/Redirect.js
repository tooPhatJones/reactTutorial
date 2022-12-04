import React from 'react';
import { useHistory } from "react-router-dom";

export function Redirect() {
  let history = useHistory();

  const clickityclick = function(){
    history.push('/ReduxWrappers')
        }
  return(
        <div className="Redirect">
           <button onClick={()=> clickityclick()}>
               redirect
           </button>
        </div>
  )
}