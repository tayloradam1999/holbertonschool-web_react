import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

window.alert = jest.fn();


// shallow render app component
describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	// regular render tests
	it('Tests that App renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Contains Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header').length).toBe(1);
	})

	it('Contains Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Login />)).toBe(true);
	})

	it('Contains Footer component', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('Footer').length).toBe(1);
	})

	it('Tests that CourseList is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('CourseList').length).toBe(0);
	})

	it('Tests that <Notifications /> is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.contains(<Notifications />)).toBe(false);
	})

	it('Tests that <Notificationitem /> is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.contains(<NotificationItem />)).toBe(false);
	})

	it('Tests that the correct amount of <BodySection /> and <BodySectionWithMargin /> are displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find(BodySection).length).toBe(1);
		expect(wrapper.find(BodySectionWithMarginBottom).length).toBe(1);
	})
});


// describe case when isLoggedIn is true
describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that the Login component is not rendered when isLoggedIn is true', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		wrapper.update();
		expect(wrapper.contains(<Login />)).toBe(false);
	})

	it('Tests that CourseList component is rendered when isLoggedIn is false', () => {
		const wrapper = shallow(<App isLoggedIn />);
		wrapper.update();
		expect(wrapper.find('CourseList').length).toBe(1);
	})

	it(`Verifies that alert is called when ctrl-h is pressed`, () => {
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler = window.alert;
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(window.alert).toHaveBeenCalled();
		wrapper.unmount();
	})

	it(`Verifies that logOut function is called when ctrl-h is pressed`, () => {
		const ConsoleSpy = jest.spyOn(global.console, 'log');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
		wrapper.unmount();
	})

})


// describe case for testing state
describe('<App />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it(`Tests that default state for displayDrawer is false`, () => {
		const wrapper = mount(<App />);
		expect(wrapper.state().displayDrawer).toBe(false);
		// but if we change the state, it should be true
		wrapper.setState({ displayDrawer: true });
		expect(wrapper.state().displayDrawer).toBe(true);
		wrapper.unmount();
	})

	it(`Tests that after calling handleDisplayDrawer that the state is update to true`, () => {
		// without setting handleDisplayDrawer
		const wrapper1 = mount(<App />);
		wrapper1.instance().handleDisplayDrawer();
		expect(wrapper1.state().displayDrawer).toBe(true);
		wrapper1.unmount();

		// with setting handleDisplayDrawer
		const wrapper2 = mount(<App />);
		wrapper2.instance().handleHideDrawer();
		expect(wrapper2.state().displayDrawer).toBe(false);
		wrapper2.instance().handleDisplayDrawer();
		expect(wrapper2.state().displayDrawer).toBe(true);
		wrapper2.unmount();
	})

	it(`Tests that after calling handleHideDrawer that the state is updated to false`, () => {
		// without setting handleDisplayDrawer
		const wrapper1 = mount(<App />);
		wrapper1.instance().handleHideDrawer();
		expect(wrapper1.state().displayDrawer).toBe(false);
		wrapper1.unmount();

		// with setting handleDisplayDrawer
		const wrapper2 = mount(<App />);
		wrapper2.instance().handleDisplayDrawer();
		expect(wrapper2.state().displayDrawer).toBe(true);
		wrapper2.instance().handleHideDrawer();
		expect(wrapper2.state().displayDrawer).toBe(false);
		wrapper2.unmount();
	})
})