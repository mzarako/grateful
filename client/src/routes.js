import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import welcome from './components/welcome';
import writeMoment from './components/write-a-moment';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={welcome} />
    <Route path="write-a-moment" component={writeMoment} />
  </Route>
);
