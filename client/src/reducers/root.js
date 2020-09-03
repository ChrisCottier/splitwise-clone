import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth"
import modals from './modals'
import friends from './friends'
import debts from './debts'


const rootReducer = combineReducers({
  users,
  auth,
  modals,
  friends,
  debts
});

export default rootReducer;
