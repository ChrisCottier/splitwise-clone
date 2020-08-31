import {SIGN_IN} from '../actions/auth'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        token: action.token,
        userId: action.user.id,
        email: action.user.email
      }
    }

    default:
      return { ...state };
  }
};

export default auth;
