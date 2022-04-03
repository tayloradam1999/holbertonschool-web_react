import Immutable from 'immutable';

function getImmutableObject(object) {
  // returns obj as a immutable Map object
  return Immutable.Map(object);
}

export default getImmutableObject;
