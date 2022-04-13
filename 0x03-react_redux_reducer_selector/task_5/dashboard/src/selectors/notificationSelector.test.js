import notificationReducer from "../reducers/notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionCreators';
import { 
  getNotifications,
  getUnreadNotifications,
  filterTypeSelected
} from './notificationSelector';
import notificationsNormalizer from '../schema/notifications';
import { Map } from 'immutable';


describe("notificationSelector", () => {
  let initData = [
    { id: 1, type: "default", value: "New course available", isRead: false },
    { id: 2, type: "urgent", value: "New resume available", isRead: false },
    { id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
  ];

  it(`Tests that getNotifications returns the correct data`, () => {
    const normalizedData = notificationsNormalizer(initData);

    const state = Map({
      notifications: normalizedData.notifications,
      filter: ""
    })

    expect(getNotifications(state)).toEqual(normalizedData.notifications);
  })

  it(`Tests that filterTypeSelected's return contains the correct type of filter`, () => {
    const normalizedData = notificationsNormalizer(initData);

    const state = Map({
      notifications: normalizedData.notifications,
      filter: "urgent"
    })

    expect(filterTypeSelected(state)).toContain("urgent");
  })

  // it(`Tests that getUnreadNotifications returns the correct data`, () => {
    
  // })
})