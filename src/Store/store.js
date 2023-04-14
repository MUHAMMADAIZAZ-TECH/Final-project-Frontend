import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import authReducer from "./Slicers/Authentication/AuthenticationSlice";
import userReducer from "./Slicers/TravelSlice/TravelSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    middleware: [thunkMiddleware],
  },
});
