import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Navbar, NavItem, Input } from 'react-materialize';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

require('../../../src/stylesheets/style.scss');

const Login = props => (
  <div>
    <Segment
      inverted
      textAlign='center'
      vertical
    >
      <Container>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item as={Link} to='/'>PostIt</Menu.Item>
          <Menu.Item position='right'>
            <Button as={Link} to='/' inverted active>Login</Button>
            <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </Container>
    </Segment>
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
