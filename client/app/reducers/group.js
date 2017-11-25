
import initialState from '../initialState';
import { GET_USER_GROUPS_FULFILLED, GET_USER_GROUPS_REJECTED } from '../actions/actionTypes';

export function groups(state = initialState.groups, action) {
  switch (action.type) {
    case GET_USER_GROUPS_FULFILLED:
      return { groups: action.groups };
    case GET_USER_GROUPS_REJECTED:
      return state;
    default:
      return state;
  }
}
