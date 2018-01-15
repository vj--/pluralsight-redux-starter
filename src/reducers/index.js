import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticated from './authReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  authenticated
});

export default rootReducer;
