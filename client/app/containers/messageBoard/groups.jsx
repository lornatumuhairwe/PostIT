import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Groups from '../../components/messageBoard/groups';
import { addNewGroupAsync, getUserGroupsAsync } from '../../actions/group';

class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: ''
    };
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this);
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

  render() {
    return (
      <Groups
        groups={this.props.groups}
        handleGroupNameChange={this.handleGroupNameChange}
        handleAddGroup={this.handleAddGroup}
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
    addNewGroupAsync
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
