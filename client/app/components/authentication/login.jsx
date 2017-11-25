import React from 'react';
import { Link } from 'react-router-dom';

require('../../../src/stylesheets/style.scss');

const Login = props => (
  <div>
    <header>
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><Link to="/signup">SIGN UP</Link></li>
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
          type="password"
          id="password"
          placeholder="Password"
          onChange={props.handlePasswordChange}
        />
        <button
          onClick={props.handleSignIn}
        >
            LOGIN
        </button>
        <p>Forgot password?</p>
      </div>
      <button>SIGN UP</button>
    </section>
  </div>
);

export default Login;
