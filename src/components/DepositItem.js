import React from 'react';
import styled from 'styled-components';

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

const Head = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  margin-bottom: 10px;
`;

const AccountId = styled.p`
  font-size: 16px;
  color: #333333;
`;

const Sum = styled.p`
  font-size: 22px;
  color: #333333;
  margin-top: 10px;
`;

const CreatedDate = styled.div`
  font-size: 14px;
  color: #999999;
`;

const AccountItem = ({ id, head, currency, balance, goal, createdAt }) => {
  const balanceSign = getBalanceSign(currency);
  const balanceString = `${balance.toLocaleString()} ${balanceSign}`;
  const goalString =  `${goal.toLocaleString()} ${balanceSign}`;
  const createdDate = formatDate(createdAt);
  return (
    <Wrapper>
      <Text>
        <Head>{head}</Head>
        <AccountId>Вклад № {id}</AccountId>
        <CreatedDate>Cоздан: {createdDate}</CreatedDate>
        <Sum>{balanceString} / {goalString}</Sum>
      </Text>
    </Wrapper>
  )
};

export default AccountItem;
