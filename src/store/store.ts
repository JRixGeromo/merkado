import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice'; // Import the product slice

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer,    // Theme state
    auth: authReducer,      // Authentication state
    products: productReducer, // Product state (ensure this is added)
  },
});

// Export the store
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
