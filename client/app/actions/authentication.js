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
      const { data } = response;
      return data;
      // console.log('status *******************',
      // /*data.message.startsWith('Username is already taken')*/);
      // if (data.message.startsWith('Username is already taken')) {
      //   throw  new Error(data.message);
      // }
    }).catch((err) => {
      // console.log(err);
      throw err;
    })
  };
}

export function signin(credentials) {
  return {
    type: SIGNIN,
    payload: axios.post('api/user/signin', {
      username: credentials.username,
      password: credentials.password
    }).then((response) => {
      const { data } = response;
      return data;
    }).catch((err) => {
      throw err;
    }),
  };
}
