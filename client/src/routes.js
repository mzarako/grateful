import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import writeMoment from './components/write-a-moment';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="write-a-moment" component={writeMoment} />
  </Route>
);
