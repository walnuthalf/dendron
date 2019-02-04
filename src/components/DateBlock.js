import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../helpers';
import MessageList from './MessageList'

const DateTime = styled.div`
  color: #b7b7b7;
  text-align: center;
  font-family: SFUIDisplay;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
    &:first-of-type > ${DateTime}{
      margin-top: 0;
    }
`;

const DateBlock = ({messages, firstMessageDate}) => {

  const dateString = ` — ${formatDate(firstMessageDate)} — `;
  const filteredMessages = messages.sort((a, b) => b.sentDate - a.sentDate);

  return (
    <Wrapper>
      <DateTime>{dateString}</DateTime>
      <MessageList messages={filteredMessages} />
    </Wrapper>
)};

export default DateBlock;
