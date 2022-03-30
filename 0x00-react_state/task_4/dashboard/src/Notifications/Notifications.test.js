import { shallow } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('<Notifications /> standard render tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Checks first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		wrapper.update();
		expect(wrapper.text()).toContain('Your notifications');
		expect(wrapper.length).toBe(1);
	})
});

describe('<Notifications /> prop tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		wrapper.update();
		expect(wrapper.find('.Notifications').length).toBe(0);
		const wrapper2 = shallow(<Notifications displayDrawer={false} />);
		wrapper2.update();
		expect(wrapper2.find('.div').length).toBe(0);
	})

	it(`Checks that new divs are rendered when the prop displayDrawer is passed as true`, () => {
		// Since the div no longer has the class name 'Notifications',
		// we can test by checking length of divs when displayDrawer is false vs true
		const wrapper = shallow(<Notifications listNotifications={[]} />);
		wrapper.update();
		const length = wrapper.find('div').length;
		const wrapper2 = shallow(<Notifications displayDrawer listNotifications={[]} />);
		wrapper2.update();
		const length2 = wrapper2.find('div').length;
		expect(length2).toBeGreaterThan(length);
	})

	it('Tests when passing empty array for listNotifications', () => {
		const wrapper = shallow(<Notifications listNotifications={[]} />);
		wrapper.update();
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})

	it('Tests when passing NO array for listNotifiations', () => {
		const wrapper = shallow(<Notifications />);
		wrapper.update();
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})
})

describe('<Notifications /> event listener tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	const listNotifications = [
		{ id: 1, type: "default", value: "New course available" },
	];

	const listNotifications2 = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", html: { __html: 'HTML' } }
	];

	it(`Tests that when clicking on 'Your notifications', handleDisplayDrawer is called`, () => {
		// <p 
		//   id="notiP"
		//   className={css(animationStyle.animation)}
		//   onClick={handleDisplayDrawer} 
		// >
		const handleDisplayDrawer = jest.fn();
		const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
		wrapper.update();
		wrapper.find('#notiP').simulate('click');
		expect(handleDisplayDrawer).toHaveBeenCalled();
		expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
	})

	it(`Tests that clicking on the close button calls handleHideDrawer`, () => {
		// <img
		//   id="x_button"
		//   src={close_icon}
		//   className={css(notificationStyles.x_button)}
		//   alt="close" height="15px" width="15px"
		//   onClick={handleHideDrawer}>
	    // </img>
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
		wrapper.update();
		wrapper.find('#x_button').simulate('click');
		expect(handleHideDrawer).toHaveBeenCalled();
		expect(handleHideDrawer).toHaveBeenCalledTimes(1);
	})
})

describe('<Notifications /> shouldComponentUpdate / PureComponent tests', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	const listNotifications = [
		{ id: 1, type: "default", value: "New course available" },
	];

	const listNotifications2 = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", html: { __html: 'HTML' } }
	];

	it(`When updating the props of the component with the SAME listNotifications, the component doesn't rerender`, () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		wrapper.setProps({ listNotifications });
		wrapper.update();
		expect(wrapper.find(NotificationItem).length).toBe(1);
		expect(wrapper.find(NotificationItem).props().type).toBe("default");
	})

	it(`When updating the props of the component with a LONGER listNotifications, the component DOES rerender`, () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);

		expect(wrapper.find(NotificationItem).length).toBe(1);

		wrapper.setProps({ listNotifications: listNotifications2 });
		wrapper.update();

		expect(wrapper.find(NotificationItem).length).toBe(3);
	})
})