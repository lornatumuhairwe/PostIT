import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Navbar, NavItem, Input, Button } from 'react-materialize';

require('../../../src/stylesheets/style.scss');

const Login = props => (
  <div>
    <Navbar id="logo" brand='PostIt' right>
      <NavItem><Link to="/signup">SIGN UP</Link></NavItem>
      <NavItem><Link to="/">HOME</Link></NavItem>
    </Navbar>
    <section>
      <Row>
        <Input
          placeholder="Username"
          s={12}
          label="Username"
          onChange={props.handleUsernameChange}
        />
        <Input
          placeholder="Password"
          s={12}
          type="password"
          label="Password"
          onChange={props.handlePasswordChange}
        />
        <Button s={12} onClick={props.handleSignIn}>LOGIN</Button>
      </Row>
    </section>
  </div>
);

export default Login;
