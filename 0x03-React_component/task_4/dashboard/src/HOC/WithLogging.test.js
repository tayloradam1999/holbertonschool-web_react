import { mount, unmount } from '../../config/setupTests';
import Login from '../Login/Login';
import WithLoggingHOC from './WithLogging';


// With Logging is a HOC that logs the component name
describe('<WithLogging />', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	
	it(`Tests that console.log contains 'Component' on mount when wrapped element is PURE html`, () => {
		console.log = jest.fn();
		const Example = WithLoggingHOC(() => <p>Component</p>);
		const wrapper = mount(<Example />);
		expect(console.log).toHaveBeenCalledWith('Component Component was mounted');
		wrapper.unmount();
	})

	it(`Tests that console.log contains name of wrapped element when mounted or unmounted`, () => {
		console.log = jest.fn();
		const Example = WithLoggingHOC(() => <p>Component</p>);
		const wrapper = mount(<Example />);
		expect(console.log).toHaveBeenCalledWith('Component Component was mounted');
		wrapper.unmount();
		expect(console.log).toHaveBeenCalledWith('Component Component was unmounted');
	})
});