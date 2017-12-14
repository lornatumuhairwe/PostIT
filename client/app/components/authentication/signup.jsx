import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Form,
  Message,
  Grid
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
    <div className='login-form'>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450, marginTop: 100 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Signup for an account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={props.handleUsernameChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Email'
                type='email'
                onChange={props.handleEmailChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={props.handlePasswordChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                onChange={props.handleConfirmPasswordChange}
              />

              <Button
                color='teal'
                fluid
                size='large'
                onClick={props.handleSignUpAction}
              >
                Signup
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='/login'>Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
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
