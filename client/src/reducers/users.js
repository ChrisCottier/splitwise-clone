import { USER_ACTIVITY } from '../actions/user'

const users = (state = {}, action) => {
  switch (action.type) {
    case USER_ACTIVITY: {
      return {
        ...state,
        comments: action.data.comments,
        debts: action.data.debts,
        expenses: action.data.expenses,
        friends: action.data.friends,
        groups: action.data.groups,
        transactions: action.data.transactions,
      }
    }
    default:
      return { ...state };
  }
};

export default users;
