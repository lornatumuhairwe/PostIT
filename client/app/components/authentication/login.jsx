import React from 'react';
import { Link } from 'react-router-dom';

require('../../../src/stylesheets/style.scss');

export const Login = () => (
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
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <button>LOGIN</button>
        <p>Forgot password?</p>
      </div>
      <button>SIGN UP</button>
    </section>
  </div>
);
