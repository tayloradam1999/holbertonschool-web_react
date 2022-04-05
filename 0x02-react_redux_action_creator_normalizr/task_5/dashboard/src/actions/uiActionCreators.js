import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';


// action creators
export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email: email,
      password: password
    }
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}