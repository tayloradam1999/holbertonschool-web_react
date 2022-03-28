import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


// shallow render CourseList component
describe('<CourseList />', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it(`Renders CourseList component without crashing`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBe(true);
	})

	it(`Renders two different CourseListRow Components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find(CourseListRow).length).toBe(2);
	})
})