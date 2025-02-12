import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import favoriteSlice from "./favorite";
import scheduleReducer from "./schedule";
import addScheduleItems from "./attraction";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteSlice,
    schedule: scheduleReducer,
    attraction: addScheduleItems,
  },
});

export default store;
