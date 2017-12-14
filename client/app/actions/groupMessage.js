import axios from 'axios';
import { GET_USER_GROUPS, SEND_MESSAGE_FULFILLED, SEND_MESSAGE_REJECTED } from './actionTypes';
import { startApiCall } from './common';

function sendMessageSuccess() {
  return {
    type: SEND_MESSAGE_FULFILLED
  };
}

function sendMessageFail() {
  return {
    type: SEND_MESSAGE_REJECTED
  };
}

function sendMessageAsync(details) {
  return (dispatch) => {
    dispatch(startApiCall(GET_USER_GROUPS));
    return axios({
      method: 'post',
      url: 'api/group',
      params: {

      },
      data: {
        message_body: details.message_body,
      },
      headers:
            {
              Authorization:
                    `Basic ${details.authKey}`
            },
    }).then((res) => {
      console.log(res);
      dispatch(sendMessageSuccess());
    }).catch((err) => {
      console.log(err);
      dispatch(sendMessageFail());
    });
  };
}
