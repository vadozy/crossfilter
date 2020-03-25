const Crossfilter = require('crossfilter2');

console.log(`typeof Crossfilter -> ${typeof Crossfilter}`); // function
console.log(`crossfilter version: ${Crossfilter.version}`);

const data = [
  { name: 'Apple', type: 'fruit', count: 20 },
  { name: 'Orange', type: 'fruit', count: 10 },
  { name: 'Tomato', type: 'vegetable', count: 42 },
  { name: 'Potato', type: 'vegetable', count: 13 },
  { name: 'Grapes', type: 'fruit', count: 50 },
  { name: 'Mango',  type: 'fruit', count: 40 },
];

const cf = Crossfilter (data);

console.log(`typeof cf -> ${typeof cf}`); // object

console.log('--- 0 --- all data');
console.log(cf.all());

console.log('--- 1 ---');
console.log(`data.length -> ${data.length}`);
let size = cf.size();
console.log(`cf.size() -> ${size}`);
let count = cf.groupAll().reduceCount().value();
console.log(`cf.groupAll().reduceCount().value() -> ${count}`);

const filtering = cf.dimension(d => d.type);
filtering.filter('vegetable');

console.log('--- 2 --- filtering.top(10)');
console.log(filtering.top(10));
console.log('--- 3 --- filtering.bottom(10)');
console.log(filtering.bottom(10));
