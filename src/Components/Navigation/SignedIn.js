import React from 'react';
import { NavLink} from 'react-router-dom';
import firebase from '../../config/config';

const Signedin = () => {
    return (
        <ol>
            <li><NavLink to = "/create"> Create order</NavLink></li>
            <li><NavLink to = "/" onClick = {() => firebase.auth().signOut()}>Sign Out</NavLink></li>
            <li><NavLink to = "/">User-Name</NavLink></li>
        </ol>
        
    )
}

export default Signedin