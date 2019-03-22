import ApolloClient from "apollo-client";
import { InMemoryCache as Cache } from "apollo-cache-inmemory";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { AUTH_TOKEN, WS_URI, HTTP_URI} from './constants'
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context'

const token = localStorage.getItem(AUTH_TOKEN)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const simpleLink = new HttpLink({
  uri: HTTP_URI,
});

const httpLink = authLink.concat(simpleLink);
const wsLink = createAbsintheSocketLink(AbsintheSocket.create(
  new PhoenixSocket(WS_URI, { params: { token: token} }),
 ));

 const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);
export default new ApolloClient({
  link,
  cache: new Cache(),
 });
 
// client.subscribe({query: subsQuery}).subscribe({
//   next(data) { console.log("next" + data.data.message);},
//   error(err) {console.error("graphql error", err);},
// })