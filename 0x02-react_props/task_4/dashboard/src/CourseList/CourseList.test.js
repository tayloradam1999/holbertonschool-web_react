import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';


// shallow render CourseList component
describe('<CourseList />', () => {
	it(`Renders CourseList component without crashing`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`Renders 5 CourseListRow components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow').length).toBe(5);
	})
})