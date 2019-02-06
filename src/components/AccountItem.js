import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getBalanceSign, formatDate } from '../helpers';

const Wrapper = styled.div`
  padding: 30px 40px;
  position: relative;

  &:nth-of-type(2n){
    background-color: #f9f9f9;
    border-top: solid 1px #eeeeee;
    border-bottom: solid 1px #eeeeee;
  }
  &:first-of-type{
    padding-top: 0;
    i{
      top: 0;
    }
  }
  &:last-of-type{
    padding-bottom: 0;
  }
`;

const Text = styled.div`
`;

const AccountId = styled.p`
  font-size: 19px;
  color: #333333;
`;

const Sum = styled.p`
  font-size: 24px;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const YearFee = styled.div`
  font-size: 14px;
  color: #999999;
`;

const CreatedDate = styled.div`
  font-size: 14px;
  color: #999999;
`;

const LastOperation = styled.div`
  font-size: 14px;
  color: #999999;
`;

const ColorOperation = styled.span`
  color: ${ p => p.isNegative ? '#de1c28' : '#6ece1a' };
`;

const ToggleBtn = styled(Link)`
  position: absolute;
  display: block;
  right: 40px;
  top: 30px;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;

const MaximizeIcon = styled.img.attrs({
  src: '/img/maximize.svg',
})`
  width: 18px;
  height: 18px;
`;

const CloseIcon = styled.img.attrs({
  src: '/img/close.svg',
})`
  width: 15px;
  height: 14px;
`;

const AccountItem = ({ id, balance, currency, rate, createdAt, linkTo, lastOperation = false, isOpen = false }) => {
  const balanceSign = getBalanceSign(currency);
  const isNegative = lastOperation.sum < 0;
  const sumString = lastOperation && `${ lastOperation.sum.toLocaleString().replace('-', '') } ${ balanceSign }`;
  const balanceString = `${ balance.toLocaleString() } ${ balanceSign }`;
  const createdDate = formatDate(createdAt, true);
  const lastOperationDate = formatDate(lastOperation.date, true);

  return (
    <Wrapper>
      <Text>
        <AccountId>Счет № { id }</AccountId>
        <Sum>{ balanceString }</Sum>
        <YearFee>{ rate }% годовых</YearFee>
        <CreatedDate>Cоздан: { createdDate }</CreatedDate>
        { lastOperation && <LastOperation>Последняя операция: { lastOperationDate } (<ColorOperation isNegative={ isNegative }>{ isNegative ? '-' : '+' } { sumString }</ColorOperation>) </LastOperation> }
      </Text>
      <ToggleBtn to={ linkTo }>{ isOpen ? <CloseIcon /> : <MaximizeIcon /> } </ToggleBtn>
    </Wrapper>
  );
};

export default AccountItem;
