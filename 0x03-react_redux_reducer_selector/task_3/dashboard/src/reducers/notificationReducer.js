import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';


export const initialState = {
  notifications: [],
  filter: ""
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.data.map(notification => ({...notification, isRead: false}));
    case MARK_AS_READ:
      return state.map((notification, index) => {
        if (index === action.index - 1) {
          notification.isRead = true;
        }
        return notification;
      });
    case SET_TYPE_FILTER:
      return state.map((notification) => {
        if (NotificationTypeFilters.includes(action.filter)) {
          notification.isRead = notification.type === action.filter;
        } else {
          notification.isRead = false;
        }
        return notification;
      });
    default:
      return state;
  }
}

export default notificationReducer;