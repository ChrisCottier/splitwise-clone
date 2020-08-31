import {apiUrl} from "../config"
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SIGN_IN="SIGNED_IN"

export const signUp = (name, email, password) =>
async (dispatch) => {
  console.log('args2', name, email, password)
  const res = await fetch(`${apiUrl}/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (res.ok) {
    const data = await res.json()
    data.token = data.token.slice(2, data.token.length-1)
    console.log(data)
    console.log(typeof data)
    document.cookie = `${ACCESS_TOKEN}=${data.token}`;
    dispatch({type: SIGN_IN, token: data.token, user: data.user})
  }
}

export const login = (email, password) =>
async (dispatch) => {
    const res = await fetch (`${apiUrl}/users/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
        const data = await res.json()
        data.token = data.token.slice(2, data.token.length-1)
        console.log(data)
        console.log(typeof data)
        document.cookie = `${ACCESS_TOKEN}=${data.token}`;
        dispatch({type: SIGN_IN, token: data.token, user: data.user})
      }
}
