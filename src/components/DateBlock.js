import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../helpers';
import MessageList from './MessageList';

const DateTime = styled.div`
  color: #b7b7b7;
  text-align: center;
  font-family: SFUIDisplay;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
    &:first-of-type > ${ DateTime }{
      margin-top: 0;
    }
`;

const DateBlock = ({ messagessss, firstMessageDate }) => {

  const dateString = ` — ${ formatDate(123123123123) } — `;
  // const filteredMessages = messages.sort((a, b) => b.sentDate - a.sentDate);
  const messages = [
    {
      id: 1,
      type: 'plain',
      role: 'user',
      author: 'Дэн',
      imgSrc: '/img/dan.jpg',
      messageBody: 'Добрый день, у меня кончились деньги. Не могли бы одолжить до зарплаты?',
      sentDate: 1525180880000,
    },
    {
      id: 2,
      type: 'plain',
      role: 'admin',
      author: 'Мария',
      imgSrc: '/img/mariya.jpg',
      messageBody: 'Добрый вечер, конечно! Куда перечислить?',
      sentDate: 1525180990000,
    },
    {
      id: 3,
      type: 'plain',
      role: 'user',
      author: 'Дэн',
      imgSrc: '/img/dan.jpg',
      messageBody: 'На мою карту рокет банка 4275 3212 7777 7777',
      sentDate: 1525181090000,
    },
    {
      id: 4,
      type: 'plain',
      role: 'admin',
      author: 'Мария',
      imgSrc: '/img/mariya.jpg',
      messageBody: 'Перевела, спасибо за  обращение!',
      sentDate: 1525182090000,
    },
  ];

  return (
    <Wrapper>
      <DateTime>{ dateString }</DateTime>
      <MessageList messages={ messages } />
    </Wrapper>
  );
};

export default DateBlock;
