import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeSection: "summary" };

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = homeSlice.actions;
export default homeSlice.reducer;
