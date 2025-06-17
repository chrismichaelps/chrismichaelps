import { createSlice } from "@reduxjs/toolkit";

const initialState = { menuOpen: false };

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    openMenu(state) {
      state.menuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = headerSlice.actions;
export default headerSlice.reducer;
