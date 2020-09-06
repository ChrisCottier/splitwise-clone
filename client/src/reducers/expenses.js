import { NEW_EXPENSE, USER_EXPENSES } from '../actions/expenses'

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

    case USER_EXPENSES: {
      return {
        ...state,
        expenses: action.expenses
      }
    }
    default:
      return state;
  }
};

export default expenses;
