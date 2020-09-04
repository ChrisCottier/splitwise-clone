import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


export const SplashNav = () => {

  return (
    <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </NavLink>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
        </div>

        <div className="navbar-end">
          <div className="navbar-item buttons">
            <NavLink to="/sign-up">
              <button className="button is-link">Sign Up</button>
            </NavLink>
            <NavLink to="/login">
              <button className="button is-light">Log In</button>
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}

const Splash= () => {

  const {loggedOut} = useSelector(state=> state.auth);

  if (loggedOut === false) {
    return <Redirect to="/dashboard"></Redirect>
  }

  return (
    <SplashNav></SplashNav>
  )

}

export default Splash;
