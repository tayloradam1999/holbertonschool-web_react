import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

// action creators
export const selectCourse = index => {
  return {
    type: SELECT_COURSE,
    index: index
  };
}


export const unselectCourse = index => {
  return {
    type: UNSELECT_COURSE,
    index: index
  };
}