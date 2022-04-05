import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';


describe('login', () => {
  it(`Tests that login's dispatch is called with the right type and user`, () => {
    const dispatch = jest.fn();
    const email = 'email';
    const password = 'password';

    login(email, password)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      user: {
        email,
        password
      }
    });
  })
})

describe('logout', () => {
  it(`Tests that logout's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    logout()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGOUT'
    });
  })
})

describe('displayNotificationDrawer', () => {
  it(`Tests that displayNotificationDrawer's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    displayNotificationDrawer()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    });
  })
})

describe('hideNotificationDrawer', () => {
  it(`Tests that hideNotificationDrawer's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    hideNotificationDrawer()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'HIDE_NOTIFICATION_DRAWER'
    });
  })
})