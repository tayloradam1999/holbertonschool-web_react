import { shallow, mount, unmount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import WithLoggingHOC from '../HOC/WithLogging';
import Login from './Login';


describe('<Login />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
	
	it('Tests that Login renders without crashing', () => {
		const wrapper = shallow(<Login />);
		wrapper.update();
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that the component renders 3 <input> and 2 <label> tags', () => {
		const Example = WithLoggingHOC(() => <Login />);
		const wrapper = mount(<Example />);
		expect(wrapper.find('input').length).toBe(3);
		expect(wrapper.find('label').length).toBe(2);
		wrapper.unmount();
	})

	it(`Tests that submit button is disabled by default`, () => {
		const wrapper = mount(<Login />);
		expect(wrapper.find('#submit').prop('disabled')).toBe(true);
		wrapper.unmount();
	})

	it(`Tests that submit button is enabled when email and password are both filled`, () => {
		const wrapper = mount(<Login />);
		wrapper.find('#email').simulate('change', { target: { value: 'adam' } });
		wrapper.find('#password').simulate('change', { target: { value: '123' } });
		expect(wrapper.find('#submit').prop('disabled')).toBe(false);
		wrapper.unmount();
	})
});