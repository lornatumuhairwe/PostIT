import axios from 'axios';
import { SIGNIN, SIGNUP } from '../actionTypes';

export function signup(credentials) {
  return {
    type: SIGNUP,
    payload: axios.post('api/user/signup', {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password
    }).then((response) => {
      console.log('status *******************', response.data);
    }).catch(err => console.log(err)),
  };
}

export function signin(credentials) {
  return {
    type: SIGNIN,
    payload: axios.post('api/user/signin', {
      username: credentials.username,
      password: credentials.password
    }).then().catch(),
  };
}
