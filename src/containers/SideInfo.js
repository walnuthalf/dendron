import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import InfoToggle from '../components/InfoToggle';
import AccountOpen from './AccountOpen';
import AccountList from './AccountList';
import DepositList from './DepositList';

const Wrapper = styled.div`
  flex-basis: 40%;
  padding: 45px;
  padding-top: 64px;
  box-sizing: border-box;
`;

const ListsWrapper = styled.div`
  margin-top: 55px;
  height: 72vh;
  overflow: auto;
`;

const SideInfo = () => (
  <Wrapper>
    <InfoToggle width={346} />

    <ListsWrapper>
      <Switch>
        <Route path="/accounts" exact render={() => (<AccountList />)} />
        <Route path="/accounts/:id" exact render={({ match }) => (<AccountOpen id={match.params.id} />)} />
        <Route path="/deposits" exact render={() => (<DepositList />)} />
        <Redirect to="/accounts" />
      </Switch>
    </ListsWrapper>
  </Wrapper>
);

export default SideInfo;
