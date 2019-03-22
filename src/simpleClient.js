import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { HTTP_URI } from './constants'


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: HTTP_URI,
});

const client = new ApolloClient({
  cache: cache,
  link: link,
});


export default client;
