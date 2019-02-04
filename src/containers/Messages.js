import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DateBlock from '../components/DateBlock';

const Wrapper = styled.div`
  padding-top: 1px;
  height: 70vh;
  box-sizing: border-box;
`;

const Container = styled.div`
  padding: 15px 25px;
  padding-left: 0;
  box-sizing: border-box;
  height: 92%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #52aff1;
  }
`;

const Messages = ({ messages }) => (
  <Wrapper>
    <Container>
      {messages.map(message => (<DateBlock key={message.id} {...message} />))}
    </Container>
  </Wrapper>
);

const mapStateToProps = (state) => ({
  messages: state.messages.sort((a, b) => b.firstMessageDate - a.firstMessageDate)
});

export default connect(mapStateToProps)(Messages);
