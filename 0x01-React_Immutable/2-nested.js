import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  // Retrieves value of an object at the define path in the array
  //
  // object - plain object
  // array - array containing list of a path to some key in object
  //
  // Returns value of object at defined path
  const myMap = Immutable.fromJS(object);
  return myMap.getIn(array);
}
