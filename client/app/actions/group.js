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
    return axios({
      method: 'get',
      url: 'api/groups',
      headers:
                {
                  Authorization:
                    `Basic ${authKey}`
                },
    }).then((groups) => {
      console.log(JSON.stringify(groups));
      dispatch(getUserGroupsSuccess(groups.data));
    }).catch((err) => {
      console.log(JSON.stringify(err.data));
      dispatch(getUserGroupsFail(err));
    });
  };
}
