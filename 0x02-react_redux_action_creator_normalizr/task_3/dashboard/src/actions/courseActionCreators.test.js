import { selectCourse, unselectCourse } from "./courseActionCreators";


describe("selectCourse", () => {
  it(`Tests calling selectCourse with 1 as argument`, () => {
    expect(selectCourse(1)).toEqual({
      type: 'SELECT_COURSE',
      index: 1
    });
  });
})

describe("unselectCourse", () => {
  it(`Tests calling unselectCourse with 1 as argument`, () => {
    expect(unselectCourse(1)).toEqual({
      type: 'UNSELECT_COURSE',
      index: 1
    });
  });
})