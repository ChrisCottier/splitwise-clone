import {USER_DEBTS, CLEAR_DEBT_INFO} from '../actions/debts'

const debts = (state = {}, action) => {
  switch (action.type) {
    case USER_DEBTS: {
      return {
        ...state,
        iOwe:action.data.iOwe,
        iAmOwed:action.data.iAmOwed,
        totalIAmOwed:action.data.totalIAmOwed,
        totalIOwe: action.data.totalIOwe,
        netOwed: action.data.netOwed
      }
    }

    case CLEAR_DEBT_INFO: {
      return {}
    }

    default:
      return { ...state };
  }
};

export default debts;
