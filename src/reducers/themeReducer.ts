// src/reducers/themeReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Explicitly define the type for the theme state
type ThemeState = {
  theme: 'light' | 'dark';
};

// Set the initial state with an explicit type
const initialState: ThemeState = {
  theme: 'light', // Default theme is 'light'
};

// Create a slice for theme state
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark
    },
  },
});

// Export actions
export const { toggleTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
