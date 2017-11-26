import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Groups from '../../components/messageBoard/groups';
import { addNewGroupAsync, getUserGroupsAsync } from '../../actions/group';
import { getActiveGroupAsync } from '../../actions/activeGroup';

class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      activeGroup: ''
    };
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
    this.handleGetActiveGroup = this.handleGetActiveGroup.bind(this);
  }

  componentDidMount() {
    this.props.getUserGroups(this.props.userAuth.cookie);
  }

  // componentDidUpdate() {
  //   this.props.getUserGroups(this.props.userAuth.cookie);
  // }

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
    this.props.getActiveGroupAsync(activeGroup.id, this.props.userAuth.cookie);
  }

  render() {
    { console.log('props>>>>>>>>>>', this.props); }
    return (
      <Groups
        groups={this.props.groups}
        handleGroupNameChange={this.handleGroupNameChange}
        handleAddGroup={this.handleAddGroup}
        handleGetActiveGroup={this.handleGetActiveGroup}
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
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
