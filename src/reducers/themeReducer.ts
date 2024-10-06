import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the type for the theme state
type ThemeState = {
  theme: 'light' | 'dark';
};

// Set the initial state with an explicit type
const initialState: ThemeState = {
  theme: 'light', // Default theme is 'light'
};

// Define AsyncStorage key for the theme
const STORAGE_KEY = 'user_theme';

// Create a slice for theme state
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Toggle between light and dark themes and persist the choice
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      // Save the theme to AsyncStorage
      AsyncStorage.setItem(STORAGE_KEY, state.theme);
    },
    // Load the theme from storage into the state
    loadTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

// Export actions
export const { toggleTheme, loadTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
