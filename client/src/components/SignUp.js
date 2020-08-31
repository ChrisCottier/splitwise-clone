import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {signUp} from '../actions/auth'

const SignUp =() => {
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

return (
  <div className="container is-widescreen">
    <div className="control">
        <p>INTRODUCE YOURSELF</p>
    </div>
    <form action="sign-up" method="POST" onSubmit={submitSignUp}>
        <div className="field">
        <label className="label">Hi there! My name is</label>
            <div className="control">
                <input className="input is-info" type="text" name="name" required value={name} onChange={setField}/>
            </div>
        </div>
        <div className="field">
        <label className="label">Here's my email address:</label>
            <div className="control">
                <input className="input is-info" type="email" autoComplete="email" name="email" value={email} required onChange={setField}/>
            </div>
        </div>
        <div className="field">
        <label className="label">And here's my password:</label>
            <div className="control">
                <input className="input is-info" type="password" autoComplete="new-password" required name="password" value={password} onChange={setField}/>
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
)
}

export default SignUp
