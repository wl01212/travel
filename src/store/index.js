import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // 預設使用 localStorage
import rootReducer from "./reducers";

// 設定 redux-persist 配置
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite", "schedule"], // 只持久化這些 reducer
};

// 包裝 rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 建立 store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 忽略 redux-persist 的動作
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 建立 persistor
export const persistor = persistStore(store);
export default store;
