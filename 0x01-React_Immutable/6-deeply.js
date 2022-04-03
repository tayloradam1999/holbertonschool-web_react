import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2) {
  // Deeply merges page2 to page1
  //
  // page1 - object
  // page2 - object
  //
  // Returns a list containing the values of page1 and page2
  // if two values are the same, they should combine.
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.mergeDeep(myMap2);
}

export default mergeDeeplyElements;
