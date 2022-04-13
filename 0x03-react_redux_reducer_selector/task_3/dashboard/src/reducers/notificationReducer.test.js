import notificationReducer from "./notificationReducer"
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';


describe("notificationReducer", () => {
  it(`Tests that notificationReducer's default state returns an empty array in 'notifications' attribute`, () => {
    const expected = notificationReducer(undefined, {});
    expect(expected).toEqual({ notifications: [], filter: "" });
    expect(expected).toBeInstanceOf(Object);
    expect(expected).toHaveProperty("notifications");
    expect(expected.notifications).toBeInstanceOf(Array);
    expect(expected.notifications).toHaveLength(0);
  })

  it(`Tests that 'FETCH_NOTIFICATIONS_SUCCESS' returns correct data`, () => {
    const myInput = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    };

    const expected = notificationReducer(undefined, myInput);

    expect(expected).toEqual(
      [{
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      }, {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }]
    );
  })

  it(`Tests that 'MARK_AS_READ' returns correct data`, () => {
    const expected = notificationReducer([
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      }, {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ], {
      type: MARK_AS_READ,
      index: 1
    });

    expect(expected).toEqual([
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: true
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      }, {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ]);
  })

  it(`Tests that 'SET_TYPE_FILTER' returns correct data`, () => {
    const expected = notificationReducer([
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      }, {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ], {
      type: SET_TYPE_FILTER,
      filter: "urgent"
    });

    expect(expected).toEqual([
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      }, {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      }, {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ]);
  })
})