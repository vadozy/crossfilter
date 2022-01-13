const Crossfilter = require('crossfilter2');


const data = [
  0, 1, 2, 3, 4,
];

const data2 = new Uint32Array(data);

for (const d of data2) {
  console.log(d);
}

const cf = Crossfilter ([...data2]);

console.log('--- 0 --- all data');
console.log(cf.all());

console.log('--- 1 ---');
console.log(`data.length -> ${data.length}`);
let size = cf.size();
console.log(`cf.size() -> ${size}`);
let count = cf.groupAll().reduceCount().value();
console.log(`cf.groupAll().reduceCount().value() -> ${count}`);

const filtering = cf.dimension(d => d % 3);
filtering.filter(2);

console.log('--- 2 --- filtering.top(10)');
console.log(filtering.top(10));
console.log('--- 3 --- filtering.bottom(10)');
console.log(filtering.bottom(10));
