import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false, // Initial state set to false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true; // Set isAuthenticated to true when user is set
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false; // Set isAuthenticated to false when user is cleared
    },
  },
});

// Export actions
export const { setUser, clearUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
