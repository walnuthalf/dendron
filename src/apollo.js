import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://45.76.252.132:4000/api',
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;
