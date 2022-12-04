import React from 'react'
// Update Page and​​​​​​‌​​​‌‌​​​​‌‌‌​​​‌‌​​‌​‌​‌ UserInfoWithTitle

export function ConditionalRender(props) {
    return (
        <div>
            <p>below is a conditionally rendered statement</p>
            {props.answer ? <div>this is true</div> : <div>this is false</div>}


            
        </div>
    );
}

//note you cannot have a conditional render that is not wrapped inside a parent div.
// for example the below does not Work


// export function ConditionalRender({user}) {
//     return (
//  {props.answer ? <div>this is true</div>: <div>this is false</div>}
//     );
// }