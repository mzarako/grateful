import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';

import WriteMoment from './components/write-a-moment';
import ReadMoment from './components/read-a-moment';
import Footer from './components/footer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="write-a-moment" component={WriteMoment} />
    <Route path="read-a-moment" component={ReadMoment} />

  </Route>
);
