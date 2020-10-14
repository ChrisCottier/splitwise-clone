import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./styles/login-signup.css";
import { login } from "../actions/auth";
import { SplashNav } from "./Splash";

const Login = () => {
  const { token, errors } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitLogin = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(login(email, password));
  };

  const setField = (event) => {
    const name = event.target.name;
    if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "password") {
      setPassword(event.target.value);
    }
  };

  const loginDemoUser = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(login("DemoUserEmail@demo.com", "demopassword"));
  };

  if (token) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  if (errors === undefined) return null;

  return (
    <>
      <SplashNav></SplashNav>
      <div className="container is-widescreen">
        <div id="log-in-container">
          <h1 className="welcome-header title is-4">WELCOME TO SPLITWISE</h1>
          <ul id="validations-container">
            {errors.length > 0 ? (
              errors.map((error, ind) => <li key={ind}>{error}</li>)
            ) : (
                <></>
              )}
          </ul>
          <form action="sign-up" method="POST" onSubmit={submitLogin}>
            <div className="field">
              <label className="label">Email address</label>
              <div className="control">
                <input
                  className="input is-info"
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  value={email}
                  onChange={setField}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input is-info"
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  required
                  value={password}
                  onChange={setField}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  id="login-button"
                  className="button is-link"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={loginDemoUser}
                >
                  Login as Demo User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
