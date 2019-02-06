import React from 'react';
import styled from 'styled-components';

import Channels from '../containers/Channels';
import Chat from '../containers/Chat'

const Wrapper = styled.div`
  display: flex;
`;

const ChatPage = () => (
  <Wrapper>
    <Channels />
    <Chat />
  </Wrapper>
);

export default ChatPage;
