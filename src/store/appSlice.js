import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: false,
  rendered: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaded(state, action) {
      state.loaded = action.payload;
    },
    setRendered(state, action) {
      state.rendered = action.payload;
    },
    initializeApp(state) {
      state.loaded = true;
      state.rendered = true;
    },
  },
});

export const { setLoaded, setRendered, initializeApp } = appSlice.actions;
export default appSlice.reducer;
