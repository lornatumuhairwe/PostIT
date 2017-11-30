import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Input, Row } from 'react-materialize';
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

const Signup = props => (
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
            <Button as={Link} to='/login' inverted style={{ marginLeft: '0.5em' }}>Login</Button>
            <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }} active>Sign up</Button>
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
          placeholder="Email"
          s={12}
          label="Email"
          type="email"
          onChange={props.handleEmailChange}
        />
        <Input
          placeholder="Password"
          s={12}
          type="password"
          label="Password"
          onChange={props.handlePasswordChange}
        />
        <Input
          placeholder="Confirm Password"
          s={12}
          type="password"
          label="Confirm Password"
          onChange={props.handleConfirmPasswordChange}
        />
        <Button
          s={12}
          onClick={props.handleSignUpAction}
        >SIGN UP
        </Button>
      </Row>
    </section>
  </div>
);

Signup.propTypes = {
  handleUsernameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
  handleSignUpAction: PropTypes.func.isRequired,
};

export default Signup;
