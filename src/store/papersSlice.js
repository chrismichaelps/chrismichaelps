import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedPaper: 0 };

const papersSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    setSelectedPaper(state, action) {
      state.selectedPaper = action.payload;
    },
  },
});

export const { setSelectedPaper } = papersSlice.actions;
export default papersSlice.reducer;
