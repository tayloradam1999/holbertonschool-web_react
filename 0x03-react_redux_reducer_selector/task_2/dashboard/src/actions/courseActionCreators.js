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

// regular action creator
export const fetchCourseSuccess = () => {
  return ({
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ],
  });
}
