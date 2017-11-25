import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Groups from '../../components/messageBoard/groups';
import { getUserGroupsAsync } from '../../actions/group';

class GroupsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserGroups(this.props.userAuth.cookie);
  }

  render() {
    return (
      <Groups groups={this.props.groups} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserGroups: getUserGroupsAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
