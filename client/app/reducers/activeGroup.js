import initialState from '../initialState';

export function getActiveGroup(state = initialState.activeGroup, action) {
  switch (action.type) {
    case 'GET_ACTIVE_GROUP':
      return {
        activeGroup: {
          id: action.group_id,
          groupName: action.groupName,
          messages: action.messages
        }
      };
  }
}
