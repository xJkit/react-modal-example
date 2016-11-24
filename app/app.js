import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

// Load routes
import routes from './routes';

// Load custom css: app.scss
import 'style!css!sass!applicationStyles';
import 'style!css!rodal/lib/rodal.css';

render(
  <Provider store={configureStore()}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
