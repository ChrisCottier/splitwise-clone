import {
  NEW_EXPENSE,
  USER_EXPENSES,
  EXPENSE_DATA,
  CLEAR_EXPENSE_DATA,
  FAILED_EXPENSE_CREATION
} from "../actions/expenses";
import { POST_COMMENT } from "../actions/comments";

const defaultState = {
  expenses: [],
  expenseCreated: false,
  errors: [],
};

const expenses = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, action.newExpense],
        expenseCreated: true,
        errors: []
      };
    }
    case FAILED_EXPENSE_CREATION: {
      return {
        ...state,
        expenseCreated: false,
        errors: action.errors
      }
    }

    case USER_EXPENSES: {
      return {
        ...state,
        expenses: action.expenses,
      };
    }

    case EXPENSE_DATA: {
      return {
        ...state,
        expense: action.data,
      };
    }

    default:
      return state;
  }
};

export default expenses;
