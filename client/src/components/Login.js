import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../actions/auth'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth)


    const submitLogin = (event) => {
        event.stopPropagation()
        event.preventDefault()

        dispatch(login(email, password))
    }

    const setField = (event) => {
        const name = event.target.name
        if (name === 'email') {
            setEmail(event.target.value)
        } else if (name === 'password') {
            setPassword(event.target.value)
        }
    }

    if (token) {
      return <Redirect to='/users'></Redirect>
    }

    return (
        <div className="container is-widescreen">
            <div className="control">
                <p>WELCOME TO SPLITWISE</p>
            </div>
            <form action="sign-up" method="POST" onSubmit={submitLogin}>
                <div className="field">
                <label className="label">Email address</label>
                    <div className="control">
                        <input className="input is-info" type="email" required autoComplete="email" name="email" value={email} onChange={setField}/>
                    </div>
                </div>
                <div className="field">
                <label className="label">Password</label>
                    <div className="control">
                        <input className="input is-info" type="password" required autoComplete="current-password" name="password" value={password} onChange={setField}/>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Login</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Login as Demo User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default Login
