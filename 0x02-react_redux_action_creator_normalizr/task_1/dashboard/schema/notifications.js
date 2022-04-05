const jsonData = require('../notifications.json');
const schema = require('normalizr').schema;
const normalize = require('normalizr').normalize;


export const getAllNotificationsByUser = (userId) => {
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


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);