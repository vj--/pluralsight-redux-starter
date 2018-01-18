import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.authenticated, action) {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCESS:
      return [
        ...state,
        Object.assign({}, {authenticated:1})
      ];
      break;

    default:
      return state;
  }
}
