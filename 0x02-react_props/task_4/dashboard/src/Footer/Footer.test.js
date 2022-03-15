import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';


// shallow render footer component
describe('<Footer />', () => {
	it('Tests that Footer renders without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Contains the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	})
});