import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.authenticated, action) {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCESS:
      return action.authenticated;
      break;

    default:
      return state;
  }
}
