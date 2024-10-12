import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

// Persist Apollo Client cache
const setupCachePersistence = async () => {
  await persistCache({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });
};

// Run persistence setup before creating the client
setupCachePersistence().catch(console.error);

// Use HttpLink directly without RetryLink
const client = new ApolloClient({
  //uri: 'http://localhost:5000/graphql', // Adjust as necessary
  uri: 'http://10.0.2.2:5000/graphql',
  cache,
});

export default client;
