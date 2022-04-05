import {
  markAsRead,
  setNotificationFilter
} from './notificationActionCreators';


describe('markAsRead', () => {
  it(`Tests calling markAsRead with 1 as argument`, () => {
    expect(markAsRead(1)).toEqual({
      type: 'MARK_AS_READ',
      index: 1
    });
  });
})

describe('setNotificationFilter', () => {
  it(`Tests calling setNotificationFilter with a NotificationType that is in
  NotificationTypeFilters`, () => {
    const filter = "DEFAULT"

    expect(setNotificationFilter(filter)).toEqual({
      type: 'SET_TYPE_FILTER',
      filter: filter
    });
  });
})