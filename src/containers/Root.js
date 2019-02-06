import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from '../store';

import Chat from './Chat';
import SideInfo from './SideInfo';

const Wrapper = styled.div`
  display: flex;
`;

const Root = () => (
  <Provider store={ store }>
    <Router>
      <Wrapper>
        <Chat />
        <SideInfo />
      </Wrapper>
    </Router>
  </Provider>
);

export default Root;
