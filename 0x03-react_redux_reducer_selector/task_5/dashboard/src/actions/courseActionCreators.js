import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";


// action creators with bound dispatch
export const selectCourse = (courseId) => (dispatch) => {
  dispatch({
    type: SELECT_COURSE,
    courseId,
  });
};

export const unselectCourse = (courseId) => (dispatch) => {
  dispatch({
    type: UNSELECT_COURSE,
    courseId,
  });
};

export const fetchCourseSuccess = (course) => (dispatch) => {
  dispatch({
    type: FETCH_COURSE_SUCCESS,
    data: course,
  });
};
