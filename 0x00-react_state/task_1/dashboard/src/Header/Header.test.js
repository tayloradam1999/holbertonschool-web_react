import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Header from './Header';


// shallow render header component
describe('<Header />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that Header renders without crashing', () => {
		const wrapper = shallow(<Header />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that the component renders <img> and <h1> tags', () => {
		const wrapper = shallow(<Header />);
		wrapper.update();
		expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
	})
});