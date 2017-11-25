import axios from 'axios';
import { GET_USER_GROUPS, GET_USER_GROUPS_FULFILLED, GET_USER_GROUPS_REJECTED } from './actionTypes';
import { startApiCall } from './common';

function getUserGroupsSuccess(groups) {
  return {
    type: GET_USER_GROUPS_FULFILLED,
    groups
  };
}

function getUserGroupsFail(err) {
  return {
    type: GET_USER_GROUPS_REJECTED,
    err
  };
}

export function getUserGroupsAsync(authKey) {
  return (dispatch) => {
    dispatch(startApiCall(GET_USER_GROUPS));
    return axios.post(
      'api/groups',
      {
        headers:
            {
              Authorization:
                `Basic ${authKey}`
            },
      }
    ).then((groups) => {
      console.log(groups);
      dispatch(getUserGroupsSuccess(groups));
    }).catch((err) => {
      console.log(err);
      dispatch(getUserGroupsFail(err));
    });
  };
}
