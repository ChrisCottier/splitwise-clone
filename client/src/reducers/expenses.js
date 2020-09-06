import {NEW_EXPENSE} from '../actions/expenses'

const defaultState = {
  expenses: []
}

const expenses = (state = defaultState, action) => {
    switch (action.type) {
      case NEW_EXPENSE: {
        return {
          ...state,
          expenses: [...state.expenses, action.newExpense]
        }
      }
      default:
        return state;
    }
  };

  export default expenses;