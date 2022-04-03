import Immutable from 'immutable';

function getImmutableObject(object) {
  // returns object as an immutable Map object with fromJS
  return Immutable.fromJS(object);
}

export default getImmutableObject;
