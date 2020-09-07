import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "bulma/css/bulma.css";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import UserList from "./components/UsersList";
import AddFriend from "./components/AddFriend";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import All from "./components/All";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Expenses from "./components/Expense";
import RecentActivity from "./components/Activites";
import Splashpage from "./components/Splashpage";

import { hasAccessToken } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hasAccessToken());
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splashpage}></Route>
        {/* <Route exact path="/landing" component={Splashpage}></Route> */}
        <Route path="/users" component={UserList} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/add-friend" component={AddFriend} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/activities" component={RecentActivity} />
        <Route path="/all" component={All} />
        <Route path="/footer" component={Footer} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
