import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import './styles/navbar.css'
import {ACCESS_TOKEN, LOG_OUT} from '../actions/auth'

export const SideNav = (props) => {
  const {location} = props;
  const [navSet, setNavSet] = useState(false);
  const [dashboard, setDashboard] = useState("");
  const [activity, setActivity] = useState("");
  const [expenses, setExpenses] = useState("");

  if (location === "dashboard" && !navSet) {
    setDashboard("active-page")
    setNavSet(true)
  }  else if (location === "activities") {
    setActivity("active-page")
    setNavSet(true)
  } else if (location === "expenses") {
    setExpenses("active-page")
    setNavSet(true)
  }

  return (
  <nav>
    <ul>
      {/* <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
      {/* <li><NavLink to="/sign-up" activeclass="active">Sign-Up</NavLink></li>
      <li><NavLink to="/login" activeclass="active">Login</NavLink></li> */}
      <li><i className={`${dashboard} fas fa-home`}></i><NavLink to="/dashboard" activeclass="active" className={`${dashboard} page-link`}>{'  Dashboard'}</NavLink></li>
      <li><i className={`${activity} fas fa-flag`}></i><NavLink to="/dashboard" activeclass="active" className={`${activity} page-link`}>{'  Recent Activity'}</NavLink></li>
      <li><i className={`${expenses} fas fa-list-alt`}></i><NavLink to="/dashboard" activeclass="active" className={`${expenses} page-link`}>{'  All Expenses'}</NavLink></li>
    </ul>
  </nav>
  )
}

const Navbar = () => {
  const dispatch= useDispatch()
  const {userId, token, name, loggedOut} = useSelector(state => state.auth);
  const logOut = () => {
    document.cookie = `${ACCESS_TOKEN}=;`;
    dispatch({type: LOG_OUT});
  }
  return (
    <nav id="navbar" className="navbar container is-widescreen" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </NavLink>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          {/* <a className="navbar-item">
            Home
          </a> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              {name}
            </a>

            <div className="navbar-dropdown">
              <NavLink className="navbar-item" to="/dashboard">
                Your Account
              </NavLink>
              <a className="navbar-item" href="https://github.com/ChrisCottier/splitwise-clone">
                Github
              </a>
              <a className="navbar-item" onClick={logOut}>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}



export default Navbar;
