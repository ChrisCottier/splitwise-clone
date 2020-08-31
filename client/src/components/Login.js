import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const submitLogin = (event) => {
        event.stopPropagation()
        event.preventDefault()



    }

    const setField = (event) => {
        const name = event.target.name
        if (name === 'email') {
            setEmail(event.target.value)
        } else if (name === 'password') {
            setPassword(event.target.value)
        }
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
                        <input className="input is-info" type="email" name="email"/>
                    </div>
                </div>
                <div className="field">
                <label className="label">Password</label>
                    <div className="control">
                        <input className="input is-info" type="password" name="password"/>
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
