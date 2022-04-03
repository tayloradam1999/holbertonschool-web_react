import Immutable from 'immutable';

const map = Immutable.Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.withMutations((mapItem) => {
  // changes 2 of map's values
  mapItem.set(2, 'Benjamin').set(4, 'Oliver');
});

module.exports = {
  map,
  map2,
};
