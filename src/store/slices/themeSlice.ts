import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the type for the theme state
type ThemeState = {
  theme: 'light' | 'dark' | 'femme';
};

// Set the initial state with an explicit type
const initialState: ThemeState = {
  theme: 'light', // Default theme is 'light'
};

// Define AsyncStorage key for the theme
const STORAGE_KEY = 'user_theme';

// Async thunk to load the theme from AsyncStorage
export const loadThemeFromStorage = createAsyncThunk(
  'theme/loadThemeFromStorage',
  async () => {
    const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
    return (savedTheme as 'light' | 'dark' | 'femme') || 'light'; // Fallback to 'light' if no theme is saved
  },
);

// Create a slice for theme state
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Toggle between light, dark, and femme themes and persist the choice
    toggleTheme: state => {
      if (state.theme === 'light') {
        state.theme = 'dark';
      } else if (state.theme === 'dark') {
        state.theme = 'femme';
      } else {
        state.theme = 'light';
      }
      // Save the theme to AsyncStorage
      AsyncStorage.setItem(STORAGE_KEY, state.theme);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      loadThemeFromStorage.fulfilled,
      (state, action: PayloadAction<'light' | 'dark' | 'femme'>) => {
        state.theme = action.payload; // Update theme after it is loaded from AsyncStorage
      },
    );
  },
});

// Export the actions
export const { toggleTheme } = themeSlice.actions;

// Export the reducer
export default themeSlice.reducer;
