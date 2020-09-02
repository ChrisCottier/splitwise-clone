import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'


import UserList from './components/UsersList';
import AddFriend from './components/AddFriend';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

import { hasAccessToken } from "./actions/auth"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/" activeclass="active">Home</NavLink></li>
          <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
          <li><NavLink to="/sign-up" activeclass="active">Sign-Up</NavLink></li>
          <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
          <li><NavLink to="/dashboard" activeclass="active">Dashboard</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users" component={UserList} />
        <Route exact path="/"><h1>Welcome to Splitwise</h1></Route>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path='/add-friend' component={AddFriend} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/footer' component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
