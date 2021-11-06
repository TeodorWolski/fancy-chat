import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "redux/appSlice/appSlice";

const reducer = appSlice.reducer;

const store = createStore(
  reducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
