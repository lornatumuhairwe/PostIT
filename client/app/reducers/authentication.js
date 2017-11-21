import { combineReducers } from 'redux';
import initialState from '../initialState';
import { SIGNIN, SIGNUP } from '../actionTypes';

function authentication(state = initialState.userAuth, action) {
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
    case 'SIGNIN_FULFILLED':
      return {
        cookie: action.payload.cookie,
        isAuthenticated: true
      };
    default:
      return state;
  }
}

function loading(state = initialState.loading, action) {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return { loading: true };
    case 'SIGNIN_PENDING':
      return { loading: true };
    case 'SIGNUP_FULFILLED':
      return { loading: false };
    case 'SIGNIN_FULFILLED':
      return { loading: false };
    case 'SIGNUP_REJECTED':
      return { loading: false };
    case 'SIGNIN_REJECTED':
      return { loading: false };
    default:
      return state;
  }
}

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case SIGNUP:
//       return {
//         ...state,
//         userAuth: {
//           ...state.userAuth,
//           cookie: '######',
//           isAuthenticated: true
//         }
//       };
//     default:
//       return state;
//   }
// }

const authenticationActions = combineReducers({
  loading,
  authentication
});

export default authenticationActions;
