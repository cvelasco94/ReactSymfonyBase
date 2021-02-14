import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/nav/Nav';
import ReactPage from '../App';

// Import style
import './css/index.css';
// Import components
// import Button from './Components/buttons/button';
import HomePage from './Components/Home';

function IndexPage() {
    return (
        <>
        <Router>
        <div className="page-container">
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/app" component={ReactPage}></Route>
            </Switch>
        </div>
        </Router>
        </>
    );
}

export default IndexPage;