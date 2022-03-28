import { shallow, mount, unmount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import NotificationItem from './NotificationItem';


// shallow render NotificationItem component
describe('<NotificationItem />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dumby `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('Passes dumby `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('Passes dumby `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})
