const jsonData = require('../notifications.json');


const getAllNotificationsByUser = (userId) => {
  // returns a list containing all 'context' objects from the jsonData variable
  // when the author id matches the userId parameter
  //
  // @userId: string
  //
  // returns: list containing all 'context' objects when 
  // the author id matches the userId parameter
  const allNotifications = JSON.parse(JSON.stringify(jsonData));
  const filteredNotifications = allNotifications.filter(notification => notification.author.id === userId);
  const onlyContext = filteredNotifications.map(notification => notification.context);
  return onlyContext;
}


export default getAllNotificationsByUser;