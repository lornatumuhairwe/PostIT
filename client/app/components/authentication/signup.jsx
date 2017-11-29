import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Input, Button, Row } from 'react-materialize';

require('../../../src/stylesheets/style.scss');

const Signup = props => (
  <div>
    <Navbar id="logo" brand='PostIt' right>
      <NavItem><Link to="/login">LOGIN</Link></NavItem>
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
      {/* <div className="auth-box"> */}

      {/* <input */}
      {/* type="text" */}
      {/* id="username" */}
      {/* placeholder="Username" */}
      {/* onChange={props.handleUsernameChange} */}
      {/* /> */}
      {/* <input */}
      {/* type="text" */}
      {/* id="email" */}
      {/* placeholder="Email" */}
      {/* onChange={props.handleEmailChange} */}
      {/* /> */}
      {/* <input */}
      {/* type="password" */}
      {/* id="password" */}
      {/* placeholder="Password" */}
      {/* onChange={props.handlePasswordChange} */}
      {/* /> */}
      {/* <input */}
      {/* type="password" */}
      {/* id="confirm_password" */}
      {/* placeholder="Confirm Password" */}
      {/* onChange={props.handleConfirmPasswordChange} */}
      {/* /> */}
      {/* <button onClick={props.handleSignUpAction}> */}
      {/* SIGN UP */}
      {/* </button> */}
      {/* </div> */}
      {/*<button>LOGIN</button>*/}
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
