import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'
import UserList from './components/UsersList';
import SignUp from './components/SignUp'


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users" component={UserList}></Route>
            <Route exact path="/">
                <h1>My Home Page</h1>
            </Route>
            <Route path="/sign-up" component={SignUp}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
