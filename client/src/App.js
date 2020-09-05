import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'


import UserList from './components/UsersList';
import AddFriend from './components/AddFriend';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import Activities from './components/Activites'

import { hasAccessToken } from "./actions/auth"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={UserList} />
        <Route exact path="/" component={Splash}></Route>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path='/add-friend' component={AddFriend} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/activities' component={Activities} />
        <Route path='/footer' component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
