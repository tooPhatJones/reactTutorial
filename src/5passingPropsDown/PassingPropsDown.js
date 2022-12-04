import React from 'react'
import {Classprops} from './Classprops'
function Page({ user }) {
    return (
        <div>
            <div>...</div>
            <UserInfoWithTitle title={user} />
            <div>...</div>
        </div>
    );
}

function UserInfoWithTitle({ title }) {
    return (
        <div>
            <UserInfo user={title} />
        </div>
    );
}

function UserInfo(props) {
    return (
        <div>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </div>
    );
}

export function PassingPropsDown() {
    return (
        <div>
            passing with functional components
            <Page user={{ firstName: 'John', lastName: 'Doe' }} />
            <br />
            passing with class based functions 
            <br/>
            this component is recieving props without a constructor
            <Classprops />
        </div>
    );
}

// export {
//     Page,
//     UserInfoWithTitle,
//     UserInfo
// }
