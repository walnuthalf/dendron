import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CHANNELS = gql `
    query {
      channels {
        name
        type
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
      }
    }
  `


const Chat = () => (
  <Query query={GET_CHANNELS}>
    {({data, loading, error, fetchMore}) => {
      if (loading) return <p>Loading</p>
      if (error) return <p>Error</p>

      return (
        <Fragment>
          <p>header</p>
          {data.channels && data.channels.map(item => (
            <h1>{item.name}</h1>
          ))}
        </Fragment>
      )
    }}

  </Query>
);

export default Chat;
