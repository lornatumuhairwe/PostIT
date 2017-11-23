import axios from 'axios';
import { SIGNIN, SIGNUP, SIGNUP_FULFILLED, SIGNUP_REJECTED } from './actionTypes';
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
      console.log(payload.data.cookie);
      dispatch(signUpSuccess(payload.data.cookie));
    }).catch((err) => {
      // console.log('>>>>>>>>>>>>>>', JSON.stringify(err.response.data.message));
      dispatch(signUpFail(JSON.stringify(err.response.data.message)));
    });
  };
}

// export function signin(credentials) {
//   return {
//     type: SIGNIN,
//     payload: axios.post('api/user/signin', {
//       username: credentials.username,
//       password: credentials.password
//     }).then((response) => {
//       const { data } = response;
//       return data;
//     }).catch((err) => {
//       throw err;
//     }),
//   };
// }
