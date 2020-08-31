import React from 'react'

const SignUp =() => {

return (
  <div>
      <p>INTRODUCE YOURSELF</p>
    <div class="field">
        <div class="control">
            <input class="input is-info" type="text"/>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input class="input is-info" type="email"/>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input class="input is-info" type="password"/>
        </div>
    </div>
    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Sign me up!</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Sign up with Demo User</button>
        </div>
    </div>
  </div>
)
}

export default SignUp
