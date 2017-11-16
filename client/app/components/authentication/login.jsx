import React from 'react';

require('../../../src/stylesheets/style.scss');

export const Login = () => (
  <div>
    <header>
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><a>SIGN UP</a></li>
        <li className="nav-item"><a>Why PostIt?</a></li>
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
