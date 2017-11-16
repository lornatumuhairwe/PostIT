import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Signup } from './authentication/signup';
import { Login } from './authentication/login';
import { Home } from './home';

require('../../src/stylesheets/style.scss');

export const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);
