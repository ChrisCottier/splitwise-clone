import {FRIENDS_LIST} from '../actions/friends'

const friends = (state = {}, action) => {
    switch (action.type) {
      case FRIENDS_LIST: {
        return {
          ...state,
          friends: action.friends
        }
      }

      default:
        return state;
    }
  };

  export default friends;
