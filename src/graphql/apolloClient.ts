import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
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

// Add RetryLink to retry failed requests
const retryLink = new RetryLink({
  attempts: {
    max: 3,  // Retry up to 3 times
    retryIf: (error, _operation) => !!error,  // Retry if there's an error
  },
});

const client = new ApolloClient({
  //uri: 'http://localhost:5000/graphql',
  uri: 'http://10.0.2.2:5000/graphql',
  //uri: 'http://172.18.8.113:5000/graphql',
  cache,
  link: retryLink,
});

export default client;
