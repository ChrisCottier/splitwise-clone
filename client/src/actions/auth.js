import { apiUrl } from "../config";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SIGN_IN = "SIGNED_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_IN_ERRORS = "SIGN_IN_ERRORS";

export const signUp = (name, email, password) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (res.ok) {
    const data = await res.json();
    if (data.validated) {
      let { token, user } = data;
      token = token.slice(2, token.length - 1);
      document.cookie = `${ACCESS_TOKEN}=${token}`;
      dispatch({ type: SIGN_IN, token, user });
    } else {
      const { errors } = data;
      dispatch({ type: SIGN_IN_ERRORS, errors });
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  const res = await fetch(`${apiUrl}/users/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const data = await res.json();
    if (data.validated) {
      let { token, user } = data;
      token = token.slice(2, token.length - 1);
      document.cookie = `${ACCESS_TOKEN}=${token}`;
      dispatch({ type: SIGN_IN, token, user });
    } else {
      const { errors } = data;
      dispatch({ type: SIGN_IN_ERRORS, errors });
    }
  }
};

function getCookieValue(value) {
  const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
  return match ? match.pop() : null;
}

export const hasAccessToken = () => async (dispatch) => {
  const token = getCookieValue(ACCESS_TOKEN);

  const res = await fetch(`${apiUrl}/users/restore`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (res.ok) {
    const data = await res.json();
    if (data !== null) {
      dispatch({ type: SIGN_IN, token: data.token, user: data.user });
    } else {
    }
  }
};
