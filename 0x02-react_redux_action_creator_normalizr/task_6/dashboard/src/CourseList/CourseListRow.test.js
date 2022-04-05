import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import CourseListRow from './CourseListRow';


// shallow render CourseListRow component
describe('<CourseListRow />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

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

// describe case for background_color
describe('<CourseListRow />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	const row_background_color = { backgroundColor: '#f5f5f5ab' };
	const header_row_background_color = { backgroundColor: '#deb5b545' };

	// test cases for ths
	it(`When isHeader is true and textSecondCell does not exist, check for correct background color`, () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
		expect(wrapper.find('tr').props().style).toEqual(header_row_background_color);
	})

	it(`When isHeader is true and textSecondcell DOES exist, check for correct background color`, () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('tr').props().style).toEqual(header_row_background_color);
	})

	// test cases for tds
	it(`When isHeader is false and textSecondCell does not exist, check for correct background color`, () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
		expect(wrapper.find('tr').props().style).toEqual(row_background_color);
	})

	it(`When isHeader is false and textSecondcell DOES exist, check for correct background color`, () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('tr').props().style).toEqual(row_background_color);
	})
})