import axios from 'axios';
import { startApiCall } from './common';
import { GET_ACTIVE_GROUP } from './actionTypes';

export function getActiveGroupAsync(groupId, authKey) {
  return (dispatch) => {
    dispatch(startApiCall(GET_ACTIVE_GROUP));
    return axios({
      method: 'get',
      url: `/api/group/${groupId}/messages`,
      headers:
            {
              Authorization:
                    `Basic ${authKey}`
            },
    }).then((messages) => {
      console.log(messages);
    }).catch((error) => {
      console.log(error);
    });
  };
}
