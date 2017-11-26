import React from 'react';
import { Button, Modal, Row, Input } from 'react-materialize';

require('../../../src/stylesheets/style.scss');

class Groups extends React.Component {
  // getGroupId(group, e) {
  //   console.log(group);
  //
  // }

  renderGroups() {
    if (this.props.groups.groups) {
      return this.props.groups.groups.user_groups.map((group) => {
        const boundClick = this.props.handleGetActiveGroup.bind(this, group);
        return (<div key={group.id}>
          <li onClick={boundClick}>#{group.name}</li>
                </div>);
      });
    }
  }

  render() {
    return (
      <div className="body">
        {console.log('>>>>>>>>>>>.', this.props.groups.groups)}
        <header id="message_board_header">
          <ul>
            <li id="logo"><a>PostIt</a></li>
            <li className="nav-item"><a>MUHAIRWE</a></li>
          </ul>
        </header>
        <section id="message_board">
          <div className="side-bar">
            <h2>Groups</h2>
            <Modal
              header='Add Group'
              trigger={<Button floating large icon='add'>MODAL</Button>}
              actions={<Button onClick={this.props.handleAddGroup}>SUBMIT</Button>}
            >
              <Row>
                <Input s={6} label="Group Name" onChange={this.props.handleGroupNameChange} />
              </Row>
            </Modal>
            <ul>
              {this.renderGroups()}
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
              <Input label="Write message" onChange={this.props.handleGetMessage} />
              <div id="message_input">
                <button onClick={this.props.handlePostMessage}>SEND</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Groups;
