import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 1,
  isSideBarOpen: false
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = (state.theme % 5) + 1 // range 1 - 5
    },
    setIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload
    }
  },
});

export const {
  toggleTheme,
  setIsSideBarOpen
 } = settingsSlice.actions;

export default settingsSlice.reducer;
