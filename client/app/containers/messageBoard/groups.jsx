import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Groups from '../../components/messageBoard/groups';
import { addNewGroupAsync, getUserGroupsAsync } from '../../actions/group';
import { getActiveGroupAsync, postMessageAsync } from '../../actions/activeGroup';

class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      activeGroup: '',
      message: '',
      messages: []
    };
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
    this.handleGetActiveGroup = this.handleGetActiveGroup.bind(this);
    this.handlePostMessage = this.handlePostMessage.bind(this);
    this.handleGetMessage = this.handleGetMessage.bind(this);
  }

  componentDidMount() {
    this.props.getUserGroups(this.props.userAuth.cookie);
  }

  handleGroupNameChange(e) {
    this.setState({ groupName: e.target.value });
  }

  handleAddGroup(e) {
    e.preventDefault();
    const newGroup = {
      name: this.state.groupName,
      authKey: this.props.userAuth.cookie
    };
    this.props.addNewGroupAsync(newGroup);
  }

  handleGetActiveGroup(activeGroup, e) {
    e.preventDefault();
    console.log(activeGroup);
    this.setState({ activeGroup: activeGroup.id });
    this.props.getActiveGroupAsync(activeGroup.id, this.props.userAuth.cookie);
    // this.setState({ messages: this.props.activeGroup.messages })
  }

  handleGetMessage(e) {
    this.setState({ message: e.target.value });
  }

  handlePostMessage(e) {
    e.preventDefault();
    this.props.postMessageAsync(
      this.state.activeGroup,
      this.state.message, this.props.userAuth.cookie
    );
  }

  render() {
    { console.log('groups>>>>>>>>>>: ', this.props.groups); }
    return (
      <Groups
        groups={this.props.groups}
        handleGroupNameChange={this.handleGroupNameChange}
        handleAddGroup={this.handleAddGroup}
        handleGetActiveGroup={this.handleGetActiveGroup}
        handlePostMessage={this.handlePostMessage}
        handleGetMessage={this.handleGetMessage}
        messages={this.props.activeGroup}
      />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserGroups: getUserGroupsAsync,
    addNewGroupAsync,
    getActiveGroupAsync,
    postMessageAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
