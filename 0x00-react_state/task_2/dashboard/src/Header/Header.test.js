import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Header from './Header';
import AppContext from '../App/AppContext';


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

	it(`Tests that logoutSection is not rendered with default context values`, () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			},
			logOut: jest.fn()
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(0);
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
		wrapper.unmount();
	})

	it(`Tests that logoutSection is rendered with context values`, () => {
		const context = {
			user: {
				email: 'test@test.com',
				password: '123',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
		wrapper.unmount();
	})

	it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
		const context = {
			user: {
				email: 'test@test.com',
				password: '123',
				isLoggedIn: true
			},
			logOut: jest.fn()
		}

		const spy = jest.spyOn(context, 'logOut');

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		wrapper.find('a').simulate('click');

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	})
});