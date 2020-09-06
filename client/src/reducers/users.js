import { USER_ACTIVITY } from '../actions/user'

const users = (state = {}, action) => {
  switch (action.type) {
    case USER_ACTIVITY: {
      return {
        ...state,
        activity: action.activity
      }
    }
    default:
      return { ...state };
  }
};

export default users;
