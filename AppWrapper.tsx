// AppWrapper.tsx or AppWrapper.js (depending on your setup)
import React from 'react';
import { Provider } from 'react-redux'; // Import Redux provider
import store from './src/store/store'; // Import your Redux store
import App from './App'; // Ensure your main App component is imported

// Your existing imports and code
import './src/i18n/i18n';  // Ensure i18n is initialized globally

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
