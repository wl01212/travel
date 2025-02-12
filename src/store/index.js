
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import favoriteSlice from "./favorite";
import scheduleReducer from './schedule';

const store = configureStore({
  reducer: { counter: counterReducer, favorite: favoriteSlice,schedule: scheduleReducer, }
});

export default store;