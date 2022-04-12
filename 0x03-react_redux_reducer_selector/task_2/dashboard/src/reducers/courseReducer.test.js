import courseReducer from "./courseReducer";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import {
  fetchCourseSuccess,
} from '../actions/courseActionCreators';

describe("courseReducer", () => {
  it(`Tests that courseReducer's default state returns an empty array`, () => {
    const expected = courseReducer(undefined, {});
    expect(expected).toEqual([]);
    expect(expected).toBeInstanceOf(Array);
    expect(expected).toHaveLength(0);
  });

  it(`Tests that 'FETCH_COURSE_SUCCESS' returns correct data`, () => {
    const expected = courseReducer(undefined, fetchCourseSuccess());

    expect(expected).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);

    expect(expected).toBeInstanceOf(Array);
    expect(expected).toHaveLength(3);
  });

  it(`Tests that 'SELECT_COURSE' returns correct data`, () => {
    const expected = courseReducer([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ], ({ type: SELECT_COURSE, courseId: 1 }));

    expect(expected).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: true },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);
    
    expect(expected).toBeInstanceOf(Array);
    expect(expected).toHaveLength(3);
  });

  it(`Tests that 'UNSELECT_COURSE' returns correct data`, () => {
    const expected = courseReducer([
      { id: 1, name: "ES6", credit: 60, isSelected: true },
      { id: 2, name: "Webpack", credit: 20,isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ], ({ type: UNSELECT_COURSE, courseId: 1 }));

    expect(expected).toEqual([
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false }
    ]);

    expect(expected).toBeInstanceOf(Array);
    expect(expected).toHaveLength(3);
  });
});