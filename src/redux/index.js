import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import authentication from "./authentication";
import posts from "./post";

export default combineReducers({
  routing: routerReducer,
  authentication,
  posts
});
