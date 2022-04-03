import Immutable from 'immutable';


// takes object and returns it as an immutable Map object
export default function getImmutableObject(object) {
	return Immutable.Map(object);
}