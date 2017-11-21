import React from 'react';
import { Link } from 'react-router-dom';

require('../../../src/stylesheets/style.scss');

const Login = ({ isAuthenticated, signin, history }) => (
  <div>
      { console.log(isAuthenticated)}
    <header>
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><Link to="/signup">SIGN UP</Link></li>
        <li className="nav-item"><Link to="/">Why PostIt?</Link></li>
      </ul>
    </header>
    <section>
      <div className="auth-box">
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button onClick={(e) => {
            e.preventDefault();
            const usernameValue = document.getElementById("username").value;
            const passwordValue = document.getElementById("password").value;
            signin({
                username: usernameValue,
                password: passwordValue
            });
            }
        }
        >LOGIN
        </button>
        <p>Forgot password?</p>
      </div>
      <button>SIGN UP</button>
    </section>
  </div>
);

export default Login;
