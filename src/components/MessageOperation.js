import React from 'react';
import styled, { css } from 'styled-components';

import { getBalanceSign, formatDate } from '../helpers';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 30px 0;
  ${ p => p.reversed && css`
    justify-content: flex-start;
  ` }
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


const Profile = styled.img`
  border-radius: 50%;
  border: solid 2px #ffffff;
  width: 41px;
  height: 41px;
  margin-left: 15px;
  order: 2;
  ${ p => p.reversed && css`
    order: 0;
    margin-right: 15px;
    margin-left: 0;
  ` }
`;

const Head = styled.div`
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
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
  color: ${ p => p.isNegative ? '#de1c28' : '#6ece1a' };
  padding-left: 10px;
`;

const MessageOperation = ({ imgSrc, operationDate, operationType, operationSum, operationCurrency  }) => {
  const balanceSign = getBalanceSign(operationCurrency);
  const isNegative = operationSum < 0;
  const sumString = operationSum.toLocaleString().replace('-', '');
  const createdDate = formatDate(operationDate, true);

  return (
    <Wrapper>
      <Text>
        <Head>Операция</Head>
        <CreatedDate>{ createdDate }</CreatedDate>
        <Transaction> { operationType } <ColorTransaction isNegative={ isNegative }>{ isNegative ? '-' : '+' } { sumString } { balanceSign }</ColorTransaction> </Transaction>
      </Text>
      <Profile src={ imgSrc } />
    </Wrapper>
  );
};

export default MessageOperation;
