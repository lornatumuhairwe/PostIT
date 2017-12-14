import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container,
  Menu
} from 'semantic-ui-react';

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
            <Button as={Link} to='/login' inverted style={{ marginLeft: '0.5em' }} active>Login</Button>
            <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }}>Sign up</Button>
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
            Log-in to your account
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
                placeholder='Password'
                type='password'
                onChange={props.handlePasswordChange}
              />

              <Button
                color='teal'
                fluid
                size='large'
                onClick={props.handleSignIn}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
                    New to us? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default Login;
