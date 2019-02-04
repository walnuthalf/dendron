import React from 'react';
import { connect } from 'react-redux';

import DepositItem from '../components/DepositItem';

const DepositList = ({ deposits }) => (
  <div>
    { deposits.map( (deposit) => (<DepositItem key={deposit.id} {...deposit} />) ) }
  </div>
);

const mapStateToProps = (state) => ({
  deposits: state.deposits
})

export default connect(mapStateToProps)(DepositList);
