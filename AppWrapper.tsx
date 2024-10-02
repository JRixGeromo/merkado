// AppWrapper.tsx or AppWrapper.js (depending on your setup)
import React from 'react';
import { Provider } from 'react-redux'; // Import Redux provider
import store from './src/store/store';  // Import your Redux store
import App from './App';  // Ensure your main App component is imported

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
