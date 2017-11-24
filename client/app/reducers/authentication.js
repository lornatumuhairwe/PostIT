import initialState from '../initialState';
import { SIGNIN, SIGNUP, SIGNUP_REJECTED, SIGNUP_FULFILLED, SIGNIN_REJECTED, SIGNIN_FULFILLED } from '../actions/actionTypes';

export function authentication(state = initialState.userAuth, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        cookie: '',
        isAuthenticated: false
      };
    case SIGNIN:
      return {
        cookie: '',
        isAuthenticated: false
      };
    case SIGNUP_FULFILLED:
      return {
        cookie: action.cookie,
        isAuthenticated: true
      };
    case 'SIGNIN_FULFILLED':
      return {
        cookie: action.cookie,
        isAuthenticated: true
      };
    default:
      return state;
  }
}

export function loading(state = initialState.loading, action) {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return { loading: true };
    case 'SIGNIN_PENDING':
      return { loading: true };
    case 'SIGNUP_FULFILLED':
      return { loading: false };
    case 'SIGNIN_FULFILLED':
      return { loading: false };
    case SIGNUP_REJECTED:
      return { loading: false };
    case 'SIGNIN_REJECTED':
      return { loading: false };
    default:
      return state;
  }
}
