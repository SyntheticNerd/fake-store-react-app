import { configureStore } from "@reduxjs/toolkit";
import makeUserReducer from "../features/user/makeUserSlice";

export const store = configureStore({
  reducer: {
    makeUser: makeUserReducer
  }
});
