import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


const shallow = Enzyme.shallow;
const mount = Enzyme.mount;
const unmount = Enzyme.unmount;


export { shallow, mount, unmount };