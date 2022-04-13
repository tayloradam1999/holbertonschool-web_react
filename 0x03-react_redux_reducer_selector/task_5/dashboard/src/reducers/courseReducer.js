import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';
import { Map } from 'immutable';


export const initialState = [];

const courseReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // returns all courses with a new property 'isSelected' set to false
      let editedData = [];
      action.data.forEach(course => {
        editedData.push({
          ...course,
          isSelected: false,
        });
      });
      editedData = coursesNormalizer(editedData);
      return state.merge(editedData);
    case SELECT_COURSE:
      return state.setIn([String(action.courseId), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.courseId), 'isSelected'], false);
    default:
      return state;
  };
};


export default courseReducer;