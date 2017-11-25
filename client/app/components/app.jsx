import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from '../containers/authentication/signup';
import LoginContainer from '../containers/authentication/login';
import GroupsContainer from '../containers/messageBoard/groups';
import { Home } from './home';
import Groups from "./messageBoard/groups";

require('../../src/stylesheets/style.scss');

export const App = () => (
  <div>
    <Switch>
      {/* { render components on different routes} */}
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/groups" component={GroupsContainer} />
    </Switch>
  </div>
);
