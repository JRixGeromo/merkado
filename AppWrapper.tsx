// AppWrapper.tsx or AppWrapper.js (depending on your setup)
import React from 'react';
import { Provider } from 'react-redux'; // Import Redux provider
import store from './src/store/store'; // Import your Redux store
import App from './App'; // Ensure your main App component is imported
import './src/i18n/i18n';  // Import the i18n setup to initialize translations

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
