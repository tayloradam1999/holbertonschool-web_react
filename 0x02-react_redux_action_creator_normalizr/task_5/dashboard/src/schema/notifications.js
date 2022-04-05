const jsonData = require('../../notifications.json');
const schema = require('normalizr').schema;
const normalize = require('normalizr').normalize;


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);

export const getAllNotificationsByUser = (userId) => {
  // returns a list containing all 'context' objects from the normalizedData variable
  // when the author id matches the userId parameter
  //
  // @userId: string
  //
  // returns: list containing all 'context' objects when 
  // the author id matches the userId parameter
  const listNotifications = normalizedData.entities.notifications;
  const listMessages = normalizedData.entities.messages;
  const myList = [];
  for (let key in listNotifications) {
    if (listNotifications[key].author === userId) {
      myList.push(listMessages[listNotifications[key].context]);
    }
  }
  return myList;
}