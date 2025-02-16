import { combineReducers } from "redux";
import counterReducer from "./counter";
import favoriteReducer from "./favorite";
import scheduleReducer from "./schedule";
import attractionReducer from "./attraction";

const rootReducer = combineReducers({
  counter: counterReducer,
  favorite: favoriteReducer,
  schedule: scheduleReducer,
  attraction: attractionReducer,
});

export default rootReducer;
