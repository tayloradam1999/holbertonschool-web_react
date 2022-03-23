import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';


// shallow render CourseListRow component
describe('<CourseListRow />', () => {
	it(`When isHeader is true, renders on cell with colspan=2
	when textSecondCell does not exist`, () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
		expect(wrapper.find('th').exists()).toBe(true);
	})

	it(`When isHeader is true, renders two cells when textSecondCell is present`, () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('th').length).toBe(2);
	})

	it(`When isHeader is false, renders two td elements within a tr element`, () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('tr').length).toBe(1);
		expect(wrapper.find('td').length).toBe(2);
	})
})