import { combineReducers } from "redux";
import counterReducer from "./counter";
import favoriteReducer from "./favorite";
import scheduleReducer from "./schedule";

const rootReducer = combineReducers({
  counter: counterReducer,
  favorite: favoriteReducer,
  schedule: scheduleReducer,
});

export default rootReducer;
