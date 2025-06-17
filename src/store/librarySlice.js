// Library slice/reducer for managing active library state

import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeLibrary: 0 };

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setActiveLibrary(state, action) {
      state.activeLibrary = action.payload;
    },
  },
});

export const { setActiveLibrary } = librarySlice.actions;
export default librarySlice.reducer;
