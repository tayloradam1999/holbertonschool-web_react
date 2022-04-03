import Immutable from 'immutable';

// takes object and returns it as an immutable Map object
const getImmutableObject = (object) => {
  Immutable.fromJS(object, (key, value) => {
    return value.toMap();
  });
};


export default getImmutableObject;