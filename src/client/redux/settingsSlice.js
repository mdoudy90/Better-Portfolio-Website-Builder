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
      state.theme = (state.theme % 7) + 1 // range 1 - 7
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
