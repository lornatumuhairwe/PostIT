
import initialState from '../initialState';
import { ADD_NEW_GROUP_FULFILLED, GET_USER_GROUPS_FULFILLED, GET_USER_GROUPS_REJECTED } from '../actions/actionTypes';

export function groups(state = initialState.groups, action) {
  switch (action.type) {
    case GET_USER_GROUPS_FULFILLED:
      return { groups: action.groups.user_groups };
    case GET_USER_GROUPS_REJECTED:
      return state;
    case ADD_NEW_GROUP_FULFILLED:
      return [
        ...state.groups,
        {
          name: action.newGroup.name,
          id: action.newGroup.id,
        }
      ];
    default:
      return state;
  }
}

