import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
  },
});
