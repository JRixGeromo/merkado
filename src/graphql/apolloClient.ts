import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// Persist Apollo Client cache
const setupCachePersistence = async () => {
  try {
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
      key: 'apollo-cache',
    });
  } catch (error) {
    console.log('Cache persistence setup failed:', error);
  }
};

// Run persistence setup before creating the client
setupCachePersistence().catch(console.error);

// Use HttpLink directly without RetryLink
const client = new ApolloClient({
  uri: 'http://10.0.2.2:5000/', // Android emulator localhost
  cache: cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export default client;
