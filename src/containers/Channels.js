import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Channel from '../components/Channel';
import SearchBox from '../components/SearchBox';

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
`;

const Wrapper = styled.div`
  flex: 0 0 25%;
  box-sizing: border-box;
  min-width: 0;
`;

const ChannelsWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  /* ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #52aff1;
  } */
`;

const Channels = () => (
  <Query query={ GET_CHANNELS }>
    { ({ data }) => (
      <Wrapper>
        <ChannelsWrapper>
          <SearchBox />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          { /* { data.channels && data.channels.map(channel => (
          <Channel key={ channel.name } channel={ channel } />
        )) } */ }
        </ChannelsWrapper>
      </Wrapper>
    ) }
  </Query>
);

export default Channels;
