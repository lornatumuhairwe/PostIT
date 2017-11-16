import React from 'react';

require('../../../src/stylesheets/style.scss');


export const Signup = () => (
    <div>
        <header>
            <ul>
                <li id="logo"><a>PostIt</a></li>
                <li className="nav-item"><a>LOGIN</a></li>
                <li className="nav-item"><a>Why PostIt?</a></li>
            </ul>
        </header>
        <section>
            <div className="auth-box">
                <input type="text" placeholder="Username or Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>SIGN UP</button>
            </div>
            <button>LOGIN</button>
        </section>
    </div>
);
