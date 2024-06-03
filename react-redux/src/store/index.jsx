import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
