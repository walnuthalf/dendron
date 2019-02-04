import React from 'react';
import styled from 'styled-components';

import { getBalanceSign, formatDate } from '../helpers';

const Wrapper = styled.div`
  padding: 15px 40px;
  position: relative;

  &:nth-of-type(2n){
    background-color: #f9f9f9;
    border-top: solid 1px #eeeeee;
    border-bottom: solid 1px #eeeeee;
  }
`;

const CreatedDate = styled.div`
  color: #999999;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Transaction = styled.div`
  font-size: 14px;
  color: #262626;
`;

const ColorTransaction = styled.span`
  color: ${p => p.isNegative ? '#de1c28' : '#6ece1a'};
  padding-left: 10px;
`;

const ToggleBtn = styled.i`
  position: absolute;
  display: block;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &>img{
    vertical-align: bottom;
  }
  &:hover{
    opacity: 0.7;
  }
`;

const ChatIcon = styled.img.attrs({
  src: '/img/chat.svg'
})``;

const OperationItem = ({date, type, sum, currency, handleClick}) => {
  const balanceSign = getBalanceSign(currency);
  const isNegative = sum < 0;
  const sumString = `${sum.toLocaleString().replace('-', '')} ${balanceSign}`;
  const createdDate = formatDate(date, true);

  return (
  <Wrapper>
      <CreatedDate>{createdDate }</CreatedDate>
      <Transaction> {type} <ColorTransaction isNegative={isNegative}>{isNegative ? '-' : '+'} {sumString}</ColorTransaction> </Transaction>
      <ToggleBtn onClick={handleClick} > <ChatIcon /> </ToggleBtn>
  </Wrapper>
)};

export default OperationItem;
