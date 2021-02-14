import React, {useState} from 'react';
import axios from 'axios';

// Import style
import '../css/index.css';
// Import components
import Button from './buttons/Button'

function IndexPage() {
    const [users, setUsers] = useState([]);
    
    // Functions
    const getUsers = () => {
        axios.get(`http://api.localhost.com/api/getList`).then(users => {
            setUsers(users = users.data)
        })
    };

    return (
        <>
        <div className="page-container">
            <div className="page-content">
                <div className="listOfUsers">
                    <h2>List of users:</h2>
                    <ul className="getUsersList">
                        {users.map(user => <li key={user.id}>{user.name}</li>)}
                    </ul>
                    <div className="botones-avaibook">
                        <Button onclickAction={getUsers} buttonId="btnGetUsersList" buttonClass="btn btn-primary" buttonName="Get Users"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default IndexPage;