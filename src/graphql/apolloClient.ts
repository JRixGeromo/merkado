import { ApolloClient, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql',
  cache,
});

export default client;
