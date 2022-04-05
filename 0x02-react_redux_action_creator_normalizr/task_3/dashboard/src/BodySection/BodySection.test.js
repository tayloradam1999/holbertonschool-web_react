import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';


describe('<BodySection />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it(`Renders h2 and children correctly when no children in props`, () => {
		const wrapper = shallow(<BodySection title="My title" />);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('h2').length).toBe(1);
		expect(wrapper.find('h2').text()).toBe('My title');
	})

	it(`Renders h2 and children correctly when children in props`, () => {
		const wrapper = shallow(<BodySection title="test title"><p>test children</p></BodySection>)
		expect(wrapper.find('h2').text()).toBe('test title');
		expect(wrapper.find('p').text()).toBe('test children');
		expect(wrapper.find('p').length).toBe(1);
		expect(wrapper.find('h2').length).toBe(1);
	})
})