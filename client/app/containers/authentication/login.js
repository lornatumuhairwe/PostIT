import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/authentication/login';
import { signin } from '../../actions/authentication';

class LoginContainer extends React.Component {
  render() {
    return (
  <Login signin={this.props.signin} state={this.props.state} history={this.props.history} />
  );
  }
}

function mapStateToProps(state) {
  // console.log(state.authentication);
  return {
    state
  };
}

const mapDispatchToProps = dispatch =>
  (
    {
      signin: (credentials) => { dispatch(signin(credentials)); }
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
