import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Signup from '../../components/authentication/signup';
import { signUpAsync } from '../../actions/authentication';

/**
 * Container that renders the Signup component.
 * It is the connection between the component and the store
 */
class SignUpContainer extends React.Component {
  /**
   * The constructor method handles creating and initializing an object created with this class
   * super() has to be called when there is a constructor
   * this keyword is uninitialized after super() is called
   * Passing props when calling super() allows you to access this.props in the constructor
   * @param {Object} props - The creation parameters
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSignUpAction = this.handleSignUpAction.bind(this);
  }

  /**
  * Handles getting of username
   * @param {Object} event - The event object
   * @returns {Object} state of username
   */
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleConfirmPasswordChange(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  handleSignUpAction(e) {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.signUp(credentials);
  }


  render() {
    const { from } = this.props.location.state || { from: { pathname: '/groups' } };

    if (this.props.state.userAuth.isAuthenticated) {
      return (
        <Redirect to={from} />
      );
    }
    return (
      <Signup
        handleUsernameChange={this.handleUsernameChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleConfirmPasswordChange={this.handleConfirmPasswordChange}
        handleSignUpAction={this.handleSignUpAction}
      />
    );
  }
}

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    state
  };
}

const mapDispatchToProps = dispatch =>
  (
    {
      signUp: (credentials) => { dispatch(signUpAsync(credentials)); }
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
