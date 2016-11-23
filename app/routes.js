import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

// Load components
import Main from 'components/Main';
import NotFound from 'components/NotFound';

// root path
const ROOT = '/';

// routes
const routes = (
  <Router history={browserHistory}>
    <Route path={ROOT} component={Main} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default routes;
