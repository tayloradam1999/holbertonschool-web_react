import {
  markAsRead,
  setNotificationFilter
} from './notificationActionCreators';


describe('markAsRead', () => {
  it(`Tests that markAsRead's dispatch is called with the right type and index`, () => {
    const dispatch = jest.fn();
    const index = 1;

    markAsRead(index)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'MARK_AS_READ',
      index
    });
  });
})

describe('setNotificationFilter', () => {
  it(`Tests that setNotificationFilter's dispatch is called with the right type and filter`, () => {
    const dispatch = jest.fn();
    const filter = 'all';

    setNotificationFilter(filter)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TYPE_FILTER',
      filter
    });
  });
})