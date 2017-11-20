import { combineReducers } from 'redux';
import initialState from '../initialState';
import { SIGNUP } from '../actionTypes';

function signup(state = initialState.userAuth, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        cookie: '######',
        isAuthenticated: true
      };
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
  signup
});

export default authenticationActions;
