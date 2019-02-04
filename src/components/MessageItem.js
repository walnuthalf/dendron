import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 30px 0;
  ${p => p.reversed && css`
    justify-content: flex-start;
  `}
  &:first-of-type{
    margin-top: 0;
  }
  &:last-of-type{
    margin-bottom: 0
  }
`;

const Text = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  padding-top: 14px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  order:1;
`;

const Author = styled.span`
  color: #333333;
  font-size: 14px;
  font-weight: 500;
`;

const Body = styled.span`
  color: #878787;
  font-size: 14px;
`;

const Profile = styled.img`
  border-radius: 50%;
  border: solid 2px #ffffff;
  width: 41px;
  height: 41px;
  margin-left: 15px;
  order: 2;
  ${p => p.reversed && css`
    order: 0;
    margin-right: 15px;
    margin-left: 0;
  `}
`;

const Message = ({author, messageBody, isReversed, imgSrc}) => (
  <Wrapper reversed={isReversed}>
    <Text>
      <Author>{author}{author &&': '}</Author>
      <Body>{messageBody}</Body>
    </Text>
    <Profile reversed={isReversed} src={imgSrc}/>
  </Wrapper>
);

export default Message;
