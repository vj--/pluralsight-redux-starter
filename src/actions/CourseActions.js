import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(course) {
  return { type: types.LOAD_COURSES_SUCCESS, course: course };
}

export function loadCourses(){
    return function(dispatch){
      return CourseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
    }
}
