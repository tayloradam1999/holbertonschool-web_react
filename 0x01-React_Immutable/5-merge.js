import Immutable from 'immutable';

function concatElements(page1, page2) {
  // concatenates page2 to page1
  //
  // page1 - array
  // page2 - array
  //
  // Returns a list containing the values of page1 and page2
  const myList = Immutable.List(page1);
  const myList2 = Immutable.List(page2);
  return myList.concat(myList2);
}

function mergeElements(page1, page2) {
  // merges page2 to page1
  //
  // page1 - object
  // page2 - object
  //
  // Returns a list containing the values of page1 and page2
  // if two values are the same, page2 value will be used.
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.merge(myMap2);
}

export { concatElements, mergeElements };
