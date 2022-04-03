import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  // object - plain object
  // array - array containing list of a path to some key in object
  //
  // Returns value of object at defined path
  // Return types:
  // - Immutable.Map
  // - String
  // - Undefined
  if (!object) {
    return undefined;
  }

  if (array.length === 0) {
    return object;
  }

  return array.reduce((acc, key) => {
    if (acc instanceof Immutable.Map) {
      return acc.get(key);
    }
    return acc[key];
  });
}
