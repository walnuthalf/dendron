import React from 'react';
import { connect } from 'react-redux';

import AccountItem from '../components/AccountItem';


const AccountList = ({ accounts }) => (
  <div>
    {accounts.map(account => (<AccountItem key={account.id} {...account} linkTo={`/accounts/${account.id}`}
                              lastOperation={account.operations.sort((a,b) => b.date - a.date)[0]}
                              />)
    )}
  </div>
);


const mapStateToProps = (state) => ({
  accounts: state.accounts
})

export default connect(mapStateToProps)(AccountList);
