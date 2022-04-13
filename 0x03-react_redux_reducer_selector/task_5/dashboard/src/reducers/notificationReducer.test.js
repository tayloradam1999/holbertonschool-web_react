import notificationReducer from "./notificationReducer"
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { Map, fromJS } from 'immutable';
import notificationsNormalizer from '../schema/notifications';


describe("notificationReducer", () => {
  it(`Tests that notificationReducer's default state returns an empty array in 'notifications' attribute`, () => {
    // now returns immutable Map
    expect(notificationReducer(undefined, {})).toEqual(Map({
      notifications: [],
      filter: ""
    }));
  })

  it(`Tests that 'FETCH_NOTIFICATIONS_SUCCESS' returns correct data`, () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: 'HTML' } },
      ]
    };

    const normalizedData = notificationsNormalizer(action.data);

    Object.keys(normalizedData.notifications).forEach(key => {
      normalizedData.notifications[key].isRead = false;
    });

    normalizedData.filter = "";

    expect(notificationReducer(undefined, action)).toEqual(Map(normalizedData));
  })

  it(`Tests that 'MARK_AS_READ' returns correct data`, () => {
    const action = {
      type: MARK_AS_READ,
      notificationId: 1
    };

    const state = Map({
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
      ],
      filter: ""
    });

    expect(notificationReducer(state, action)).toEqual(Map({
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: true },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
      ],
      filter: ""
    }));
  })

  it(`Tests that 'SET_TYPE_FILTER' returns correct data`, () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };

    const state = Map({
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
      ],
      filter: ""
    });

    expect(notificationReducer(state, action)).toEqual(Map({
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
      ],
      filter: "URGENT"
    }));
  })
})