import Immutable from 'immutable';

function getImmutableObject(object) {
  // returns obj as a immutable Map object
  return Immutable.fromJS(obj);
};

export default getImmutableObject;
