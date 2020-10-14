import { USER_DEBTS, CLEAR_DEBT_INFO, UPDATE_DEBTS, FAILED_PAYMENT } from '../actions/debts'
import { SETTLE_UP_MODAL } from '../actions/modals'
// import { NEW_EXPENSE, USER_EXPENSES } from "../actions/expenses"

const defaultState = {
  transactions: [],
  errors: []
}

const debts = (state = defaultState, action) => {
  switch (action.type) {
    case USER_DEBTS: {
      return {
        ...state,
        iOwe: action.data.iOwe,
        iAmOwed: action.data.iAmOwed,
        totalIAmOwed: action.data.totalIAmOwed,
        totalIOwe: action.data.totalIOwe,
        netOwed: action.data.netOwed
      }
    }

    case CLEAR_DEBT_INFO: {
      return defaultState;
    }

    case UPDATE_DEBTS: {
      const newTransactions = [...state.transactions, action.transaction]
      return {
        ...state,
        iOwe: action.updatedDebts,
        transactions: newTransactions,
        errors: []
      }
    }

    case FAILED_PAYMENT: {
      return {
        ...state,
        errors: action.errors
      }
    }

    case SETTLE_UP_MODAL: {
      return {
        ...state,
        transactions: [],
        errors: []
      }
    }


    default:
      return { ...state };
  }
};

export default debts;
