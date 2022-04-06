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
  const myList = [];
  jsonData.forEach((notification) => {
    if (notification.author.id === userId) {
      myList.push(notification.context);
    }
  })
  return myList;
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