import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth"
import modals from './modals'
import friends from './friends'
import debts from './debts'
import expenses from './expenses'


const rootReducer = combineReducers({
  users,
  auth,
  modals,
  friends,
  debts,
  expenses
});

export default rootReducer;
