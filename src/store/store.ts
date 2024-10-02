import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer'; // Import the theme reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer, // Register the theme reducer
  },
});

// Export the store
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
