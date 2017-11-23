import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

require('../../../src/stylesheets/style.scss');

const Signup = props => (
  <div>
    <header>
      <ul>
        <li id="logo"><a href="#">PostIt</a></li>
        <li className="nav-item"><Link to="/login">LOGIN</Link></li>
        <li className="nav-item"><Link to="/">Why PostIt?</Link></li>
      </ul>
    </header>
    <section>
      <div className="auth-box">
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={props.handleUsernameChange}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={props.handleEmailChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={props.handlePasswordChange}
        />
        <input
          type="password"
          id="confirm_password"
          placeholder="Confirm Password"
          onChange={props.handleConfirmPasswordChange}
        />
        <button onClick={props.handleSignUpAction}>
            SIGN UP
        </button>
      </div>
      <button>LOGIN</button>
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
