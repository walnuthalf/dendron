import React from 'react';
import styled from 'styled-components';

import DateBlock from '../components/DateBlock';

const Wrapper = styled.div`
  /* padding-top: 1px; */
  height: 90vh;
  box-sizing: border-box;
`;

const Container = styled.div`
  padding: 15px 25px;
  padding-left: 0;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(29,29,29,0.2);
  }
`;

const Messages = ({ messages }) => (
  <Wrapper>
    <Container>
      <DateBlock/>
      <DateBlock/>
      <DateBlock/>
      { /* { messages.map(message => (<DateBlock key={ message.id } { ...message } />)) } */ }
    </Container>
  </Wrapper>
);



export default Messages;
