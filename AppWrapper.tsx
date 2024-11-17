// AppWrapper.tsx or AppWrapper.js (depending on your setup)
import React from 'react';
import { Provider } from 'react-redux'; // Import Redux provider
import store from './src/store/store'; // Import your Redux store
import App from './App'; // Ensure your main App component is imported

import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider
import client from './src/graphql/apolloClient'; // Correct default import
// Your existing imports and code
import './src/i18n/i18n';
// Ensure i18n is initialized globally

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/* Gradient Background is applied globally */}
        <App />
    </Provider>
  </ApolloProvider>
);

export default AppWrapper;

