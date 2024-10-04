const initialState = {
    isAuthenticated: false,
    user: null, // Will store the user data on successful login
  };
  
  const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  