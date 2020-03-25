const Crossfilter = require('crossfilter2');

console.log(`typeof Crossfilter -> ${typeof Crossfilter}`); // function
console.log(`crossfilter version: ${Crossfilter.version}`);

const fruits = Crossfilter ([
  { name: 'Apple', type: 'fruit', count: 20 },
  { name: 'Orange', type: 'fruit', count: 10 },
  { name: 'Tomato', type: 'vegetable', count: 42 },
  { name: 'Grapes', type: 'fruit', count: 50 },
  { name: 'Mango',  type: 'fruit', count: 40 },
]);

console.log(`typeof fruits -> ${typeof fruits}`); // object

console.log('--- 1 ---');
let count = fruits.groupAll().reduceCount().value();
console.log(`count -> ${count}`);
let size = fruits.size();
console.log(`size -> ${size}`);

const filtering = fruits.dimension(d => d.type);
filtering.filter('fruit');

console.log('--- 2 ---');
console.log(filtering.top(5));
console.log('--- 3 ---');
console.log(filtering.bottom(2));
