import { EXPENSE_MODAL, SETTLE_UP_MODAL } from '../actions/modals'

const defaultState = {
  expenseDisplay: "none",
  settleUpDisplay: 'none'
}

const modals = (state = defaultState, action) => {
  switch (action.type) {
    case EXPENSE_MODAL: {
      return {
        ...state,
        expenseDisplay: action.display
      }
    }

    case SETTLE_UP_MODAL: {
      return {
        ...state,
        settleUpDisplay: action.display
      }
    }
    default:
      return state;
  }
};

export default modals;
