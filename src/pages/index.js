import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Chat from './Chat';
import NotFound from './NotFound';

const Pages = () => (
  <Fragment>
    <Router>
      <Chat path="chat" />
      <NotFound default />
    </Router>
  </Fragment>
);

export default Pages;
