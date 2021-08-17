import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 1
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = (state.theme % 6) + 1
    }
  },
});

export const {
  toggleTheme
 } = settingsSlice.actions;

export default settingsSlice.reducer;
