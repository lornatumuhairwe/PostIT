import initialState from '../initialState';
import { GET_GROUP_MESSAGES_FULFILLED } from '../actions/actionTypes';

export function getActiveGroup(state = initialState.activeGroup, action) {
  switch (action.type) {
    case GET_GROUP_MESSAGES_FULFILLED:
      return {
        activeGroup: {
          // id: action.group_id,
          // groupName: action.groupName,
          messages: action.messages
        }
      };
    default:
      return state;
  }
}
