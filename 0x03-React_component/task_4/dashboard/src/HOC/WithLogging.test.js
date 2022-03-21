import { shallow, mount, unmount } from '../../config/setupTests';
import WithLoggingHOC from './WithLogging';


// With Logging is a HOC that logs the component name
describe('<WithLogging />', () => {
	it(`Tests that console.log contains 'Component' on mount when wrapped element is PURE html`, () => {
		const Example = WithLoggingHOC(() => <p />);
		const wrapper = mount(<Example />);
		expect(console.log).toHaveBeenCalledWith('Component Component was mounted');
		wrapper.unmount();
	})

	it(`Tests that console.log contains name of wrapped element when mounted or unmounted`, () => {
		const Example = WithLoggingHOC(() => <Login />);
		const wrapper = mount(<Example />);
		expect(console.log).toHaveBeenCalledWith('Component Login was mounted');
		unmount(wrapper);
		expect(console.log).toHaveBeenCalledWith('Component Login was unmounted');
	})
});