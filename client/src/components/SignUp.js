import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signUp } from '../actions/auth'
import { SplashNav } from './Splash'

const SignUp = () => {

  const { token } = useSelector(state => state.auth)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitSignUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(signUp(name, email, password))


  }

  const setField = (event) => {
    const name = event.target.name
    if (name === 'name') {
      setName(event.target.value)
    } else if (name === 'email') {
      setEmail(event.target.value)
    } else if (name === 'password') {
      setPassword(event.target.value)
    }
  }

  if (token) {
    return <Redirect to="/dashboard"></Redirect>
  }

  return (
    <>
      <SplashNav></SplashNav>
      <div className="container is-widescreen">
        <div className="control">
          <p>INTRODUCE YOURSELF</p>
        </div>
        <form action="sign-up" method="POST" onSubmit={submitSignUp}>
          <div className="field">
            <label className="label">Hi there! My name is</label>
            <div className="control">
              <input className="input is-info" type="text" name="name" required value={name} onChange={setField} />
            </div>
          </div>
          <div className="field">
            <label className="label">Here's my email address:</label>
            <div className="control">
              <input className="input is-info" type="email" autoComplete="email" name="email" required value={email} onChange={setField} />
            </div>
          </div>
          <div className="field">
            <label className="label">And here's my password:</label>
            <div className="control">
              <input className="input is-info" type="password" autoComplete="new-password" name="password" required value={password} onChange={setField} />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Sign me up!</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Sign up as Demo User</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
