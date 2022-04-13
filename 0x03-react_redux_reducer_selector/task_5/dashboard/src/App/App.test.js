import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { user, logOut } from './AppContext';


describe('<App /> standard render tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that App renders without crashing', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Contains Header component', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('Header')).toHaveLength(1);
		expect(wrapper.find('Header').exists()).toBe(true);
	})

	it('Contains Login component', () => {
		const wrapper = mount(<App />);
		expect(wrapper.find('Login')).toHaveLength(1);
		expect(wrapper.find('Login').exists()).toBe(true);
		wrapper.unmount();
	})

	it('Contains Footer component', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('Footer').length).toBe(1);
		expect(wrapper.find('Footer').exists()).toBe(true);
	})

	it('Tests that CourseList is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find('CourseList').length).toBe(0);
		expect(wrapper.find('CourseList').exists()).toBe(false);
	})

	it('Tests that <Notifications /> is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find(<Notifications />).length).toBe(0);
		expect(wrapper.contains(<Notifications />)).toBe(false);
	})

	it('Tests that <Notificationitem /> is not displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find(<NotificationItem />).length).toBe(0);
		expect(wrapper.contains(<NotificationItem />)).toBe(false);
	})

	it('Tests that the correct amount of <BodySection /> and <BodySectionWithMargin /> are displayed', () => {
		const wrapper = shallow(<App />);
		wrapper.update();
		expect(wrapper.find(BodySection).length).toBe(1);
		expect(wrapper.find(BodySectionWithMarginBottom).length).toBe(1);
	})
});

describe('<App /> context/state tests', () => {
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

	it(`Tests that when the state user has isLoggedIn as FALSE, CourseList component is not rendered
	and Login component IS rendered`, () => {
		const wrapper = mount(<App />);

		wrapper.setState({
			user: {
				...user,
				isLoggedIn: false
			},
		});

		expect(wrapper.find('CourseList').length).toBe(0);
		expect(wrapper.find('CourseList').exists()).toBe(false);
		expect(wrapper.find('Login').length).toBe(1);
		expect(wrapper.find('Login').exists()).toBe(true);
		wrapper.unmount();
	})

	it(`Tests that when the state user has isLoggedIn as TRUE, Login component is not rendered
	and Courselist component IS rendered`, () => {
		const wrapper = mount(<App />);

		wrapper.setState({
			user: {
				...user,
				isLoggedIn: true
			},
		});

		expect(wrapper.find('CourseList').length).toBe(1);
		expect(wrapper.find('CourseList').exists()).toBe(true);
		expect(wrapper.find('Login').length).toBe(0);
		expect(wrapper.find('Login').exists()).toBe(false);
		wrapper.unmount();
	})

	it(`Tests that the logIn function updates user's state correctly`, () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);

		const instance = wrapper.instance();

		instance.logIn(myUser.email, myUser.password);

		expect(wrapper.state().user).toEqual(myUser);
		expect(wrapper.state().user.isLoggedIn).toBe(true);

		wrapper.unmount();
	})

	it(`Tests that the logOut function updates user's state correctly`, () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		const myUser = {
			email: 'testy@gmail.com',
			password: 'testy',
			isLoggedIn: true,
		}

		expect(wrapper.state().user).toEqual(user);

		const instance = wrapper.instance();

		instance.logOut();

		expect(wrapper.state().user).toEqual(user);
		expect(wrapper.state().user.isLoggedIn).toBe(false);

		wrapper.unmount();
	})

	it(`Tests that the markNotificationAsRead function within App.js
	deletes the notification with the passed id from the listNotifications array`, () => {
		const context = {
			user: {
				...user,
			},
			logOut: jest.fn(),
			listNotifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, html: { __html: jest.fn() }, type: "urgent" }
			]
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<App />
			</AppContext.Provider>
		);

		const instance = wrapper.instance();

		instance.markNotificationAsRead(3);

		expect(wrapper.state().listNotifications).toEqual([
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" }
		]);
	
		expect(wrapper.state().listNotifications.length).toBe(2);
		expect(wrapper.state().listNotifications[3]).toBe(undefined);

		wrapper.unmount();
	})
})

describe('<App /> ctrl-h logout functionality', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it(`Verifies that alert is called when ctrl-h is pressed`, () => {
		const wrapper = mount(<App />);

		window.alert = jest.fn();

		wrapper.instance().keyDownHandler = window.alert;

		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });

		expect(window.alert).toHaveBeenCalled();
		expect(window.alert).toHaveBeenCalledTimes(1);

		wrapper.unmount();
	})

	it(`Verifies that logOut function is called when ctrl-h is pressed`, () => {
		const spy = jest.fn();

		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.setState({ logOut: spy});

		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);

		wrapper.unmount();
	})
})