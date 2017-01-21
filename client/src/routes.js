import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';

import WriteMoment from './components/write-a-moment';
import ReadMoment from './components/read-a-moment';
import Account from './components/account';
import Footer from './components/footer';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require-authentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="write-a-moment" component={RequireAuth(WriteMoment)} />
    <Route path="read-a-moment" component={RequireAuth(ReadMoment)} />
    <Route path="account" component={RequireAuth(Account)} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
  </Route>
);
