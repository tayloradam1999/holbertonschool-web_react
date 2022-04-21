// Selectors
export const getNotifications = (state) => {
  // returns list of notifications as Map object
  return state.get('notifications');
}

export const getUnreadNotifications = (state) => {
  // returns list of unread notifications as Map object
  return state.get('notifications').filter(notification => !notification.get('isRead'));
}

export const filterTypeSelected = (state) => {
  // returns filter type as string
  return state.get('filter');
}

