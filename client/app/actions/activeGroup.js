import axios from 'axios';
import { startApiCall } from './common';
import { GET_ACTIVE_GROUP, GET_GROUP_MESSAGES_FULFILLED, POST_MESSAGE } from './actionTypes';

function getActiveGroupSuccess(messages) {
  return {
    type: GET_GROUP_MESSAGES_FULFILLED,
    messages
  };
}

export function getActiveGroupAsync(groupId, authKey) {
  return (dispatch) => {
    dispatch(startApiCall(GET_ACTIVE_GROUP));
    return axios({
      method: 'get',
      url: `/api/group/${groupId}/messages`,
      headers:
            {
              Authorization:
                    `Bearer ${authKey}`
            },
    }).then((messages) => {
      dispatch(getActiveGroupSuccess(messages.data.messages));
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function postMessageAsync(groupId, message_body, authKey) {
  return (dispatch) => {
    dispatch(startApiCall(POST_MESSAGE));
    return axios({
      method: 'post',
      url: `/api/group/${groupId}/message`,
      data: {
        message_body
      },
      headers:
                {
                  Authorization:
                        `Bearer ${authKey}`
                },
    }).then((messages) => {
      console.log(messages);
      dispatch(getActiveGroupAsync(groupId, authKey));
    }).catch((error) => {
      console.log(error);
    });
  };
}

// export function addUserToGroupAsync(groupId, userId, authKey) {
//   return (dispatch) => {
//     dispatch(startApiCall(POST_MESSAGE));
//     return axios({
//       method: 'post',
//       url: `/api/group/${groupId}/user`,
//       data: {
//         user_id: userId
//       },
//       headers:
//                 {
//                   Authorization:
//                         `Bearer ${authKey}`
//                 },
//     }).then((response) => {
//       console.log(response);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
// }
