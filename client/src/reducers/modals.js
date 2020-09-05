import {EXPENSE_MODAL, CLOSE_EXPENSE_MODAL} from '../actions/modals'

const defaultState = {
  expenseDisplay: "none"
}

const modals = (state = defaultState, action) => {
    switch (action.type) {
      case EXPENSE_MODAL: {
        return {
          ...state,
          expenseDisplay: action.display
        }
      }
      default:
        return state;
    }
  };

  export default modals;
