// import React from 'react';
import { render } from 'react-dom';

// Load routes
import routes from 'routes';

// Load custom css: app.scss
import 'style!css!sass!applicationStyles';

render(
  routes,
  document.getElementById('app')
);
