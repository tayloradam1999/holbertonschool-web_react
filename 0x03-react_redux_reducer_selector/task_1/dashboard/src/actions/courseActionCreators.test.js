import { selectCourse, unselectCourse } from "./courseActionCreators";


describe("selectCourse", () => {
  it(`Tests that selectCourse's dispatch is called with the correct action`, () => {
    const dispatch = jest.fn();
    const courseId = "1";

    selectCourse(courseId)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "SELECT_COURSE",
      courseId,
    });
  }
  );
});
