import Immutable from 'immutable';

function getImmutableObject(object) {
  // returns obj as a immutable Map object
  return Immutable.fromJS(object);
}

export default getImmutableObject;
