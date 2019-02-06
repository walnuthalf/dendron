import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 72px;
  padding: 0 15px;
  border-top: 1px solid #f2f2f2;
  flex-grow: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  &:hover{
    background-color: pink;
  }
  &:nth-child(1){
    border-top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Date = styled.div`
  font-size: 12em;
  color: rgba(0, 0, 0, 0.4);
`;

const Name = styled.p`
  font-size: 16em;
`;

const Message = styled.div`
  font-size: 14em;
  color: #454545;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Channel = () => (
  <Wrapper>
    <Header>
      <Name>Sergey Bunas</Name>
      <Date>15/02/2019</Date>
    </Header>
    <Message>Hi whats up, lasdasdasdasdas asd asdas kj aksdjaksj  dets play some footbal ?</Message>
  </Wrapper>
);

export default Channel;
