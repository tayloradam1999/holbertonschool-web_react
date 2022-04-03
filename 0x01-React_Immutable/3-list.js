import Immutable from 'immutable';

export function getListObject(array) {
  // returns array as an immutable List object
  return Immutable.List(array);
}

export function addElementToList(list, element) {
  // appends list to string and returns list
  return list.push(element);
}
