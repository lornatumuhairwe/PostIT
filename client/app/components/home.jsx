import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    <header>
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><Link to="/signup">SIGN UP</Link></li>
        <li className="nav-item"><Link to="/login">LOGIN</Link></li>
      </ul>
    </header>
    <section className="main">
      <div>
        <p><span>#1</span><br />Broadcast messages<br />application</p>
      </div>
    </section>
    <footer>
      <p>&copy;ltumuhairwe 2017</p>
    </footer>
  </div>
);
