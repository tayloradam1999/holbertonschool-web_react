import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';
import { Map, fromJS } from 'immutable';


describe("courseReducer", () => {
  let initData = [
    {
      id: 1,
      name: "ES6",
      credit: 60,
      isSelected: false,
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20,
      isSelected: false,
    },
    {
      id: 3,
      name: "React",
      credit: 40,
      isSelected: false,
    },
  ];

  it(`Tests that courseReducer's default state returns an empty MAP`, () => {
    // now returns immutable Map
    expect(courseReducer(undefined, {})).toEqual(Map({}));
  });

  it(`Tests that 'FETCH_COURSE_SUCCESS' returns correct data`, () => {
    const action = { 
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
    };

    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(coursesNormalizer(expected));
  });

  it(`Tests that 'SELECT_COURSE' returns correct data`, () => {
    const action = {
      type: SELECT_COURSE,
      courseId: 1,
    };

    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: true,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initData)),
      action
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expected));
  });

  it(`Tests that 'UNSELECT_COURSE' returns correct data`, () => {
    const action = {
      type: UNSELECT_COURSE,
      courseId: 1,
    };

    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initData)),
      action
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expected));
  });
});