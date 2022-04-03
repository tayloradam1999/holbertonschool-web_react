import { is } from 'immutable';

function areMapsEqual(map1, map2) {
  // Compares two immutable maps and returns true if they are equal
  //
  // map1 - immutable map
  // map2 - immutable map
  //
  // returns true if maps are equal, false otherwise
  return is(map1, map2);
}

export default areMapsEqual;
