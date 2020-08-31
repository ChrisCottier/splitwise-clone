import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth"


const rootReducer = combineReducers({
  users,
  auth
});

export default rootReducer;
