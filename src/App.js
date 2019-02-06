import React from 'react';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import client from './apollo';

import Pages from './pages';

client.query({
  query: gql`
    query {
      myProfile {
        id
        name
        username
      }
      channels {
        hasUnread
        id
        lastMessage {
          id
          insertedAt
          text
          user {
            id
            name
            username
          }
        }
        name
        type
      }
    }
  `,
}).then(result => console.log(result));

const App = () => (
  <ApolloProvider client={ client }>
    <Pages/>
  </ApolloProvider>
);

export default App;

