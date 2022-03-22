import { shallow, mount } from '../../config/setupTests';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


// shallow render/mount Notifications component
describe('<Notifications />', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const listNotifications = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
	];

	const listNotifications2 = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", html: { __html: 'HTML' } }
	];

	// Normal Notifications component tests
	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Checks first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.text()).toContain('Your notifications');
	})

	// displayDrawer is false tests
	it('Tests that menuItem is rendered when displayDrawer is false', () => {	
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').length).toBe(0);
	})

	// menuItem inside of listNotifications when displayDrawer is true tests
	it('Tests that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})

	it('Tests that the div Notifications is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		wrapper.update()
		const item = wrapper.find('div.Notifications');
		expect(item.length).toBe(1);
	})

	// empty/null listNotifications tests
	it('Tests when passing empty array', () => {
		const wrapper = shallow(<Notifications listNotifications={[]} />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})

	it('Tests when passing NO array', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	})

	// event listener tests
	it(`Passes spy as markAsRead property and simulates a click on NotificationList component to
	test that spy is called with the right ID`, () => {
		const ConsoleSpy = jest.spyOn(global.console, 'log');
		const wrapper = mount(<Notifications displayDrawer listNotifications={[]} />);
		wrapper.instance().markAsRead(1);
		expect(ConsoleSpy).toHaveBeenCalledWith(`Notification 1 has been read`);
		wrapper.unmount();
	})
	
	// shouldComponentUpdate tests
	it(`When updating the props of the component with the SAME listNotifications, the component doesn't rerender`, () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		wrapper.setProps({ listNotifications });
		expect(wrapper.find(NotificationItem).length).toBe(2);
	})

	it(`When updating the props of the component with a LONGER listNotifications, the component DOES rerender`, () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		wrapper.setProps({ listNotifications: listNotifications2 });
		expect(wrapper.find(NotificationItem).length).toBe(3);
	})
});