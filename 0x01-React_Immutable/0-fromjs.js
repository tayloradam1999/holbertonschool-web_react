import Immutable from 'immutable';

// takes object and returns it as an immutable Map object
export default function getImmutableObject(object) {
  return Immutable.fromJS(object, function (key, value) {
    if (Immutable.Iterable.isIterable(value)) {
      return value.toMap();
    }
    return value;
  })
}
