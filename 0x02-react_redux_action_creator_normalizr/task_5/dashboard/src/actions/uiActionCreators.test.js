import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';


describe('login', () => {
  it(`Tests calling login with user: email and password passed as argument`, () => {
    expect(login('email', 'password')).toEqual({
      type: 'LOGIN',
      user: {
        email: 'email',
        password: 'password'
      }
    });
  })
})

describe('logout', () => {
  it(`Tests calling logout with type LOGOUT`, () => {
    expect(logout()).toEqual({
      type: 'LOGOUT'
    });
  })
})

describe('displayNotificationDrawer', () => {
  it(`Tests calling displayNotificationDrawer with type DISPLAY_NOTIFICATION_DRAWER`, () => {
    expect(displayNotificationDrawer()).toEqual({
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    });
  })
})

describe('hideNotificationDrawer', () => {
  it(`Tests calling hideNotificationDrawer with type HIDE_NOTIFICATION_DRAWER`, () => {
    expect(hideNotificationDrawer()).toEqual({
      type: 'HIDE_NOTIFICATION_DRAWER'
    });
  })
})