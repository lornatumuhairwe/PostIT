import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../containers/authentication/signup';
import LoginContainer from '../containers/authentication/login';
import { Home } from './home';
import Groups from "./messageBoard/groups";

require('../../src/stylesheets/style.scss');

export const App = () => (
  <div>
    <Switch>
      {/* { render components on different routes} */}
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/groups" component={Groups} />
    </Switch>
  </div>
);
