import * as types from '../actions/actionTypes';

export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)];
      break;
    case types.LOAD_COURSES_SUCCESS:
      return action.course;
      break;
    default:
      return state;
  }
}
