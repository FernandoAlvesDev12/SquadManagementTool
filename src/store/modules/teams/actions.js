import * as types from '../types';

export function saveTeamRequest(payload) {
  return {
    type: types.SAVE_TEAM_REQUEST,
    payload,
  };
}

export function deleteTeamRequest(payload) {
  return {
    type: types.DELETE_TEAM_REQUEST,
    payload,
  };
}
