const jsonData = require('../notifications.json');


const getAllNotificationsByUser = (userId) => {
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


export default getAllNotificationsByUser;