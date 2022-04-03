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

  const value = Immutable.getIn(object, array);
  return value;
}
