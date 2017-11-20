import { SIGNUP } from '../actionTypes';

export function signup(credentials) {
  return {
    type: SIGNUP,
    credentials,
    // signup api call
  };
}
