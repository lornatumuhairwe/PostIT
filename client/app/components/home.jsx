import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Footer } from 'react-materialize';

export const Home = () => (
  <div>
    <Navbar id="logo" brand='PostIt' right>
      <NavItem><Link to="/signup">SIGN UP</Link></NavItem>
      <NavItem><Link to="/login">LOGIN</Link></NavItem>
    </Navbar>
    <section className="main">
      <div>
        <p><span>#1</span><br />Broadcast messages<br />application</p>
      </div>
      <Footer
        copyrights="&copy; ltumuhairwe 2017"
      />;
    </section>
  </div>
);
