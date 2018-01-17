import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function oauthTokenReducer(state = initialState.oauthToken, action) {
  switch (action.type) {
    case types.TOKEN_REQUEST_SUCCESS:
      // token string is the token to be used to load the login page
      return [
        ...state,
        Object.assign({}, action.oauthToken)
      ];

    default:
      return state;
  }
}
