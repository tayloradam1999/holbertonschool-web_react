import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes'
import { Map } from 'immutable'
import uiReducer, { initialState } from './uiReducer'


describe('uiReducer', () => {
  // modified tests for uiReducer using Map from Immutable.js
  it(`Tests that state returned by uiReducer equals initial state when no action is passed`, () => {
    expect(uiReducer(undefined, {})).toEqual(Map(initialState))
  })

  it(`Tests that state returned by uiReducer equals initial state when action 'SELECT_COURSE'
  is passed`, () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(Map(initialState))
  })

  it(`Tests that action 'DISPLAY_NOTIFICATION_DRAWER' returns state with isNotificationDrawerVisible`, () => {
    // const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    // expect(state.isNotificationDrawerVisible).toEqual(true);
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toEqual(true);
  })
})