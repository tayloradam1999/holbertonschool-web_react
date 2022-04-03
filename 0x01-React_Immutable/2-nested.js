import { getIn, Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  // object - plain object
  // array - array containing list of a path to some key in object
  //
  // Returns value of object at defined path
  // Return types:
  // - Immutable.Map
  // - String
  // - Undefined
  if (!object || !array || !typeof object === 'object' || !Array.isArray(array)) {
    return undefined;
  }
  let myMap = Map(object);
  for (let i = 0; i < array.length; i++) {
    myMap = getIn(myMap, array[i]);
    if (myMap === undefined) {
      return undefined;
    }
  }
  return myMap;
}