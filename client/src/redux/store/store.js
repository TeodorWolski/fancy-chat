import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "redux/AppSlice/AppSlice";

export default configureStore({
  reducer: {
    app: AppSlice,
  },
});
