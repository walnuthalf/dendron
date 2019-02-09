import React from 'react';
import styled from 'styled-components';

import Messages from './Messages';

const Wrapper = styled.div`
  flex: 0 0 75%;
  padding: 15px;
  padding-left: 25px;
  /* background-color: #f4f4f4; */
  box-sizing: border-box;
  min-width: 0;
`;

const Chat = () => (
  <Wrapper>
    <Messages/>
  </Wrapper>
);

export default Chat;
