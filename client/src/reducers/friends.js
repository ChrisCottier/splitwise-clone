import {FRIENDS_LIST, GET_MATCHING_USERS,CLEAR_MATCHES, ADD_FRIEND} from '../actions/friends'

const defaultState = {matchingUsers: []}

const friends = (state = defaultState, action) => {
    switch (action.type) {
      case FRIENDS_LIST: {
        return {
          ...state,
          friends: action.friends
        }
      }

      case GET_MATCHING_USERS: {
        return {
          ...state,
          matchingUsers: action.data.matches,
          query: action.data.query
        }
      }

      case CLEAR_MATCHES: {
        return {
          ...state,
          matchingUsers: [],
          query: ''
        }
      }

      case ADD_FRIEND: {
        return {
          ...state,
          friends: [...state.friends, action.newFriend]
        }
      }

      default:
        return state;
    }
  };

  export default friends;
