import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Row } from 'react-materialize';
import { Segment, Menu, Container, Grid, Modal, Header, Button, Icon } from 'semantic-ui-react';

require('../../../src/stylesheets/style.scss');

class Groups extends React.Component {
  renderGroups() {
    if (this.props.groups.groups) {
      return this.props.groups.groups.map((group) => {
        const boundClick = this.props.handleGetActiveGroup.bind(this, group);
        return (<div key={group.id}>
          <li onClick={boundClick}># {group.name}</li>
                </div>);
      });
    }
  }

  logout () {
    localStorage.removeItem('token');
    return (
      <Redirect to="/login" />
    );
  }

  renderMessages() {
    if (this.props.messages) {
      console.log('component messages', this.props.messages);
      return this.props.messages.messages.map(message =>
        // noinspection JSAnnotator
        (<div key={message.id}>
          <p><span style={{ fontWeight: 700 }}>
            <b>{message.username} &nbsp;</b>
             </span>
            <span style={{ color: '#CCC' }}>{message.createdAt}</span>
          </p>
          <p key={message.id}>{message.body}</p>
         </div>
        ));
    }
  }

  render() {
    return (
      <div>
        {/* {console.log('>>>>>>>>>>>.', this.props.groups.groups)} */}
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item as={Link} to='/'>PostIt</Menu.Item>
              <Menu.Item position='right'>
                <Button inverted style={{ marginLeft: '0.5em' }} active>Muhairwe</Button>
                <Button as={Link} to='/login' inverted style={{ marginLeft: '0.5em' }} onClick={this.logout}>Logout</Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        <section id="message_board">
          <Grid columns={2} divided>
            <Grid.Column width={4}>
              <h2>Groups</h2>
              <Modal trigger={<Button>Create group</Button>} closeIcon>
                <Modal.Header>New group</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Row>
                      <Input s={6} label="Group Name" onChange={this.props.handleGroupNameChange} />
                    </Row>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.props.handleAddGroup}>
                    <Icon name='checkmark' /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
              <ul>
                {this.renderGroups()}
              </ul>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="group-title">
                <p># Fun in Kampala<span>12members</span><span>+</span></p>
              </div>
              <div className="group-messages">
                <div id="empty" />
                <div id="message">
                  {this.renderMessages()}
                </div>
                <Input label="Write message" onChange={this.props.handleGetMessage} />
                <div id="message_input">
                  <button onClick={this.props.handlePostMessage}>SEND</button>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Groups;
