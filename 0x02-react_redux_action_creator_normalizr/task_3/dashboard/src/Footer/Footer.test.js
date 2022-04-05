import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';
import React from 'react';
import Footer from './Footer';


describe('<Footer /> standard render tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that Footer renders without crashing', () => {
		const wrapper = shallow(<Footer />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Contains the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		wrapper.update();
		expect(wrapper.text()).toContain('Copyright');
	})
});

describe('<Footer /> context/state tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');

		wrapper.unmount();
	})

	it('Tests that there IS a link rendered when user IS logged in within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: true
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(1);
		expect(wrapper.find('a').exists()).toBe(true);
		expect(wrapper.text()).toContain('Contact us');

		wrapper.unmount();
	})
})
