import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes'
import uiReducer, { initialState } from './uiReducer'
// import fetchMock from 'fetch-mock'


describe('uiReducer', () => {
  it(`Tests that state returned by uiReducer equals initial state when no action is passed`, () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  })

  it(`Tests that state returned by uiReducer equals initial state when action 'SELECT_COURSE'
  is passed`, () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  })

  it(`Tests that action 'DISPLAY_NOTIFICATION_DRAWER' returns state with isNotificationDrawerVisible`, () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toEqual(true);
  })
})