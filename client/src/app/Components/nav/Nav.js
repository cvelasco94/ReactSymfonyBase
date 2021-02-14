import React from 'react';
import {Link} from 'react-router-dom';

function Nav () {
    return (
        <div className="navBar">
            <Link to="/">
                <h1 className="indexTitle">Hola AvaiBookers</h1>
            </Link>
            <ul>
                <Link to="/form">
                    <li>Form with custom hooks</li>
                </Link>
                <Link to="/app">
                    <li>Reach Home Page</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;