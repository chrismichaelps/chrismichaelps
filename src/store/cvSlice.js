import { createSlice } from "@reduxjs/toolkit";

const initialState = { viewingPdf: false };

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setViewingPdf(state, action) {
      state.viewingPdf = action.payload;
    },
    toggleViewingPdf(state) {
      state.viewingPdf = !state.viewingPdf;
    },
  },
});

export const { setViewingPdf, toggleViewingPdf } = cvSlice.actions;
export default cvSlice.reducer;
