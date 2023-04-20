import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todo";

const rootReducer = combineReducers({
  todo: todoSlice,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
