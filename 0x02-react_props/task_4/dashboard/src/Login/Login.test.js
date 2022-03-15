import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';


// shallow render login component
describe('<Login />', () => {
	it('Tests that Login renders without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that the component renders 2 <input> and 2 <label> tags', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').length).toBe(2);
		expect(wrapper.find('label').length).toBe(2);
	})
});