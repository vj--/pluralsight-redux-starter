import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticated from './authReducer';
import oauthToken from './oauthTokenReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  authenticated,
  oauthToken
});

export default rootReducer;
