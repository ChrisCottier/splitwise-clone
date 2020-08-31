import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'
import UserList from './components/UsersList';
import AddFriend from './components/AddFriend';


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
            <Route path="/dashboard" component={AddFriend} />
            <Route path="/users"> <UserList /></Route>
            <Route path="/"><h1>My Home Page</h1></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
