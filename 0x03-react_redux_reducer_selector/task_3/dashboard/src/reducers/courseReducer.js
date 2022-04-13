import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';


export const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({...course, isSelected: false}));
    case SELECT_COURSE:
      return state.map(course => {
        if (course.id === action.courseId) return {...course, isSelected: true};
        return course;
      });
    case UNSELECT_COURSE:
      return state.map(course => {
        if (course.id === action.courseId) return {...course, isSelected: false};
        return course;
      });
    default:
      return state;
  };
};


export default courseReducer;