import axios from 'axios';
import { SIGNIN, SIGNUP,
  SIGNUP_FULFILLED, SIGNUP_REJECTED,
  SIGNIN_FULFILLED, SIGNIN_REJECTED } from './actionTypes';
import { startApiCall } from './common';

function signUpSuccess(cookie) {
  return {
    type: SIGNUP_FULFILLED,
    cookie
  };
}

function signUpFail(err) {
  return {
    type: SIGNUP_REJECTED,
    err
  };
}

export function signUpAsync(credentials) {
  return (dispatch) => {
    dispatch(startApiCall(SIGNUP));
    return axios.post('api/user/signup', {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
      confirmPassword: credentials.confirmPassword,
    }).then((payload) => {
      dispatch(signUpSuccess(payload.data.cookie));
    }).catch((err) => {
      dispatch(signUpFail(JSON.stringify(err.response.data.message)));
    });
  };
}

function signInSuccess(cookie) {
  return {
    type: SIGNIN_FULFILLED,
    cookie
  };
}
function signInFail(err) {
  return {
    type: SIGNIN_REJECTED,
    err
  };
}
export function signInAsync(credentials) {
  return (dispatch) => {
    dispatch(startApiCall(SIGNIN));
    return axios.post('api/user/signin', {
      username: credentials.username,
      password: credentials.password
    }).then((payload) => {
      // console.log(payload);
      dispatch(signInSuccess(payload.data.cookie));
    }).catch((err) => {
      // console.log('>>>>>>>>>>>>>>', JSON.stringify(err.response.data.message));
      dispatch(signInFail(JSON.stringify(err.response.data.message)));
    });
  };
}
