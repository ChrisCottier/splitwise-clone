import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'
import UserList from './components/UsersList';
import AddFriend from './components/AddFriend';
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                <li><NavLink to="/sign-up" activeclass="active">Sign-Up</NavLink></li>
                <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users" component={UserList}/>
            <Route exact path="/"><h1>My Home Page</h1></Route>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path='/add-friend' component={AddFriend} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
