import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';


// action creators with bound dispatch
export const markAsRead = (index) => (dispatch) => {
  dispatch({
    type: MARK_AS_READ,
    index
  });
};

export const setNotificationFilter = (filter) => (dispatch) => {
  dispatch({
    type: SET_TYPE_FILTER,
    filter
  });
}

export const fetchNotificationsSuccess = (notifications) => (dispatch) => {
  dispatch({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications
  });
}
