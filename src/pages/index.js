import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Chat from './chat';
import NotFound from './not-found';

const Pages = () => (
  <Fragment>
      <Router>
        <Chat path="chat" />
        <NotFound default />
      </Router>
  </Fragment>
);

export default Pages;
