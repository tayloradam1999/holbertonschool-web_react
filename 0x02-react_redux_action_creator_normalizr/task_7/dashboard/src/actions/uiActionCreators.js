import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';


// action creators with bound dispatch
export const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN,
    user: {
      email,
      password
    }
  });
};

export const loginSuccess = (user) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    user
  });
};

export const loginFailure = (error) => (dispatch) => {
  dispatch({
    type: LOGIN_FAILURE,
    error
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};

export const displayNotificationDrawer = () => (dispatch) => {
  dispatch({
    type: DISPLAY_NOTIFICATION_DRAWER
  });
};

export const hideNotificationDrawer = () => (dispatch) => {
  dispatch({
    type: HIDE_NOTIFICATION_DRAWER
  });
};

// async action creators
export const loginRequest = (email, password) => (dispatch) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      // will only succeed if server is running
      const response = await fetch('http://localhost:8080/login-success.json');
      const json = await response.json();
      if (json.error) {
        dispatch(loginFailure(json.error));
      } else {
        dispatch(loginSuccess(json.user));
      }
    } catch (error_1) {
      dispatch(loginFailure(error_1));
    }
  };
};