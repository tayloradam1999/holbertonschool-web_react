import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('tests that Notifications renders three list items', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('li').length).toBe(3);
	})

	it('tests that Notifications renders the text "Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
	})
});