import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth"
import modals from './modals'


const rootReducer = combineReducers({
  users,
  auth,
  modals
});

export default rootReducer;
