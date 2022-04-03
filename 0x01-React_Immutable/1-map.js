import Immutable from 'immutable';

function getImmutableObject(object) {
  // returns object as an immutable Map object
  return Immutable.Map(object);
}

export default getImmutableObject;
