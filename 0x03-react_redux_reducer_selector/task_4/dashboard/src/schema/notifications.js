const jsonData = require('../../dist/notifications.json')
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);

const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  // only return entities to keep filter attribute, not .entities.notifications
  return normalizedData.entities;
}

export const getAllNotificationsByUser = (userId) => {
  // returns a list containing all 'context' objects from the normalizedData var
  // when the author id matches the userId parameter
  //
  // @userId: string
  //
  // returns: list containing all 'context' objects when 
  // the author id matches the userId parameter
  const myList = [];
  jsonData.forEach((notification) => {
    if (notification.author.id === userId) {
      myList.push(notification.context);
    }
  })
  return myList;
}

export default notificationsNormalizer;