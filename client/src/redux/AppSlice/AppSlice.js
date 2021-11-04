import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {},
  },
});
