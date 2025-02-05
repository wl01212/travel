
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import favoriteSlice from "./favorite";

const store = configureStore({
  reducer: { counter: counterReducer, favorite: favoriteSlice }
});

export default store;