// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Navbar, NavItem, Input } from 'react-materialize';
// import {
//   Button,
//   Container,
//   Header,
//   Icon,
//   Menu,
//   Segment,
//   Visibility,
// } from 'semantic-ui-react';
//
// require('../../../src/stylesheets/style.scss');
//
// const Login = props => (
//   <div>
//     <Segment
//       inverted
//       textAlign='center'
//       vertical
//     >
//       <Container>
//         <Menu inverted pointing secondary size='large'>
//           <Menu.Item as={Link} to='/'>PostIt</Menu.Item>
//           <Menu.Item position='right'>
//             <Button as={Link} to='/' inverted active>Login</Button>
//             <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
//           </Menu.Item>
//         </Menu>
//       </Container>
//     </Segment>
//     <section>
//       <Row>
//         <Input
//           placeholder="Username"
//           s={12}
//           label="Username"
//           onChange={props.handleUsernameChange}
//         />
//         <Input
//           placeholder="Password"
//           s={12}
//           type="password"
//           label="Password"
//           onChange={props.handlePasswordChange}
//         />
//         <Button s={12} onClick={props.handleSignIn}>LOGIN</Button>
//       </Row>
//     </section>
//   </div>
// );
//
// export default Login;

import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Login = props => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    {/* <style>{ */}
    {/* body > div, */}
    {/* body > div > div, */}
    {/* body > div > div > div.login-form { */}
    {/* height: 100%; */}
    {/* } */}
    {/* } */}
    {/* </style> */}
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
      centered
      columns={2}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Log-in to your account
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

            <Button color='teal' fluid size='large' onClick={props.handleSignIn}>Login</Button>
          </Segment>
        </Form>
        <Message>
                    New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default Login;
