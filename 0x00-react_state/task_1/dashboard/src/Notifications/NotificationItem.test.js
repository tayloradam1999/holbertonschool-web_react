import { shallow, mount, unmount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import NotificationItem from './NotificationItem';


// shallow render NotificationItem component
describe('<NotificationItem />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dumby `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		wrapper.update();
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('Passes dumby `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		wrapper.update();
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('Passes dumby `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		wrapper.update();
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})
