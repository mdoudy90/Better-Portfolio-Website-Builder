import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: true,
  isSideBarOpen: false
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload
    },
    setIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload
    }
  },
});

export const {
  setIsDarkMode,
  setIsSideBarOpen
 } = settingsSlice.actions;

export default settingsSlice.reducer;
