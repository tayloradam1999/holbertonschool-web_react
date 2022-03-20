import { shallow, mount } from '../../config/setupTests';
import React from 'react';
import BodySection from './BodySection';


describe('<BodySection />', () => {
	it(`Renders h2 and children correctly when no children in props`, () => {
		const wrapper = shallow(<BodySection title="My title" />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`Renders h2 and children correctly when children in props`, () => {
		const wrapper = shallow(<BodySection title="test title"><p>test children</p></BodySection>)
		expect(wrapper.find('h2').text()).toBe('test title');
		expect(wrapper.find('p').text()).toBe('test children');
	})
})