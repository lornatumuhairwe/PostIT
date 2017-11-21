import React from 'react';

require('../../../src/stylesheets/style.scss');

const Groups = () => (
  <div className="body">
    <header id="message_board_header">
      <ul>
        <li id="logo"><a>PostIt</a></li>
        <li className="nav-item"><a>MUHAIRWE</a></li>
      </ul>
    </header>
    <section id="message_board">
      <div className="side-bar">
        <h2>Groups&ensp;&ensp;&emsp;&emsp;&emsp;&nbsp;+</h2>
        <ul>
          <li># Fun in Kampala</li>
          <li># Fun in Kampala</li>
          <li># Fun in Kampala</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="group-title">
          <p># Fun in Kampala<span>12members</span><span>+</span></p>
        </div>
        <div className="group-messages">
          <div id="empty" />
          <div id="message">
            <p><span style={{ fontWeight: 700 }}>
              <b>XR &nbsp;</b>
            </span>
              <span style={{ color: '#CCC' }}>10:00AM</span>
            </p>
            <p>
                Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo.
                Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada,
                integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet
                suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur
                aliquam pharetra eget.
            </p>
          </div>
          <div id="message_input">
            <button>SEND</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Groups;
