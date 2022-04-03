const { fromJS } = require('immutable');


const getImmutableObject = (obj) => {
  // returns obj as a immutable Map object
  return fromJS(obj);
};

export default getImmutableObject;