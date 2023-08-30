import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleReducer from "./features/example/reducer";
import authReducer from "./features/auth/reducer";
const persistConfig = {
  key: "blockademy-website",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
  });
};

export let store = createStore();

export const persistor = persistStore(store);

export const refreshStore = () => {
  store = createStore();
};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
