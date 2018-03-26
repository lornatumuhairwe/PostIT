import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../components/authentication/login';
import { signInAsync } from '../../actions/authentication';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSignIn(e) {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signin(credentials);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/groups' } };

    if (this.props.state.userAuth.isAuthenticated) {
      return (
        <Redirect to={from} />
      );
    } else {
      return (
        <Login
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSignIn={this.handleSignIn}
        />
      );
    }
  }
}

LoginContainer.propTypes = {
  signin: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  // console.log(state.authentication);
  return {
    state
  };
}

const mapDispatchToProps = dispatch =>
  (
    {
      signin: (credentials) => { dispatch(signInAsync(credentials)); }
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
