import React from 'react';
import { Link } from 'react-router-dom';

require('../../../src/stylesheets/style.scss');


export const Signup = () => (
  <div>
    <header>
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><Link to="/login">LOGIN</Link></li>
        <li className="nav-item"><Link to="/">Why PostIt?</Link></li>
      </ul>
    </header>
    <section>
      <div className="auth-box">
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>SIGN UP</button>
      </div>
      <button>LOGIN</button>
    </section>
  </div>
);
