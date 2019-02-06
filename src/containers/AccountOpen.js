import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { sendOperation } from '../actions';
import AccountItem from '../components/AccountItem';
import OperationList from '../components/OperationList';


const HistoryHead = styled.div`
  color: #999999;
  font-size: 16px;
  margin-top: 15px;
  padding: 0 40px;
`;


const AccountOpen = ({ account, sendOperation }) => (
  <div>
    <AccountItem key={ account.id } { ...account } isOpen={ true } linkTo="/accounts" />
    <HistoryHead>История операций</HistoryHead>
    <OperationList sendOperation={ sendOperation } operations={ account.operations.sort((a, b) => b.date - a.date) } currency={ account.currency } />
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  account: state.accounts.find(item => item.id === ownProps.id),
});

export default connect( mapStateToProps, { sendOperation })(AccountOpen);
