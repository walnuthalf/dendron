import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Channel from '../components/Channel';

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
  flex-basis: 40%;
  padding: 45px;
  padding-top: 64px;
  box-sizing: border-box;
`;

const ChannelsWrapper = styled.div`
  margin-top: 55px;
  height: 72vh;
  overflow: auto;
`;

const Channels = () => (
    <Query query={GET_CHANNELS}>
    {({data}) => (
        <Wrapper>
          <ChannelsWrapper>
            {data.channels && data.channels.map(channel => (
              <Channel channel={channel} />
            ))}
          </ChannelsWrapper>
        </Wrapper>
    )}
  </Query>
);

export default Channels;
