import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import './styles/navbar.css'
import {ACCESS_TOKEN, LOG_OUT} from '../actions/auth'

export const SideNav = () => {
  return (
  <nav>
    <ul>
      <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
      {/* <li><NavLink to="/sign-up" activeclass="active">Sign-Up</NavLink></li>
      <li><NavLink to="/login" activeclass="active">Login</NavLink></li> */}
      <li><NavLink to="/dashboard" activeclass="active">Dashboard</NavLink></li>
      <li><NavLink to="/dashboard" activeclass="active">Recent Activity</NavLink></li>
      <li><NavLink to="/dashboard" activeclass="active">All Expenses</NavLink></li>
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

      <div id="navbarBasicExample" className="navbar-menu">
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
