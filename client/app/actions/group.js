import axios from 'axios';
import {
  ADD_NEW_GROUP, ADD_NEW_GROUP_FULFILLED, ADD_NEW_GROUP_REJECTED, GET_USER_GROUPS, GET_USER_GROUPS_FULFILLED,
  GET_USER_GROUPS_REJECTED
} from './actionTypes';
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

function addNewGroupSuccess() {
  return {
    type: ADD_NEW_GROUP_FULFILLED
  };
}

function addNewGroupFail() {
  return {
    type: ADD_NEW_GROUP_REJECTED
  };
}

export function addNewGroupAsync(details) {
  return (dispatch) => {
    dispatch(startApiCall(ADD_NEW_GROUP));
    return axios({
      method: 'post',
      url: 'api/group',
      data: {
        name: details.name,
      },
      headers:
            {
              Authorization:
                    `Basic ${details.authKey}`
            },
    }).then((res) => {
      console.log('res>>>>>>>>>>>>>', res.data);
    }).catch((err) => {
      console.log('err>>>>>>>>>>>>>', err);
    });
  };
}
