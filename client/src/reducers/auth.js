import { SIGN_IN, LOG_OUT, SIGN_IN_ERRORS } from "../actions/auth";

const defaultState = { loggedOut: true, errors: [] };

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        token: action.token,
        userId: action.user.id,
        email: action.user.email,
        name: action.user.name,
        loggedOut: false,
        errors: [],
      };
    }
    case LOG_OUT: {
      return {
        loggedOut: true,
      };
    }

    case SIGN_IN_ERRORS: {
      return {
        ...state,
        errors: action.errors,
      };
    }

    default:
      return { ...state };
  }
};

export default auth;
