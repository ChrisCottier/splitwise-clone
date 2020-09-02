import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth"
import modals from './modals'
import friends from './friends'


const rootReducer = combineReducers({
  users,
  auth,
  modals,
  friends
});

export default rootReducer;
