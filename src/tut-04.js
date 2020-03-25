const Crossfilter = require('crossfilter2');

const data = [
  {date: '2011-11-14T16:17:54Z', quantity: 2, total: 190, tip: 100, type: 'tab',  productIDs:['001']},
  {date: '2011-11-14T16:20:19Z', quantity: 2, total: 190, tip: 100, type: 'tab',  productIDs:['001', '005']},
  {date: '2011-11-14T16:28:54Z', quantity: 1, total: 300, tip: 200, type: 'visa', productIDs:['004' ,'005']},
  {date: '2011-11-14T16:30:43Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['001', '002']},
  {date: '2011-11-14T16:48:46Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['005']},
  {date: '2011-11-14T16:53:41Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['001', '004' ,'005']},
  {date: '2011-11-14T16:54:06Z', quantity: 1, total: 100, tip: 0,   type: 'cash', productIDs:['001', '002', '003', '004' ,'005']},
  {date: '2011-11-14T16:58:03Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['001']},
  {date: '2011-11-14T17:07:21Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['004' ,'005']},
  {date: '2011-11-14T17:22:59Z', quantity: 2, total: 90,  tip: 0,   type: 'tab',  productIDs:['001', '002', '004' ,'005']},
  {date: '2011-11-14T17:25:45Z', quantity: 2, total: 200, tip: 0,   type: 'cash', productIDs:['002']},
  {date: '2011-11-14T17:29:52Z', quantity: 1, total: 200, tip: 100, type: 'visa', productIDs:['004']},
];

console.log('--- 1 --- cf');
const cf = Crossfilter(data);
console.log(cf);
console.log(cf.all().length);
console.log(cf.allFiltered().length);


const dimByTotalAndTip = cf.dimension(d => d.total + d.tip);
console.log('--- 2 --- dim');
console.log(dimByTotalAndTip);

console.log('--- 3 --- dimByTotalAndTip.filter(290)');
dimByTotalAndTip.filter(290);
console.log(`dimByTotalAndTip.currentFilter() -> ${dimByTotalAndTip.currentFilter()}`);
console.log(cf.all().length);
console.log(cf.allFiltered().length);

console.log('--- 4 --- dimByTotal.filter(d => d === 90)');
const dimByTotal = cf.dimension(d => d.total);
dimByTotal.filter(d => d === 90);
console.log(`dimByTotal.currentFilter() -> ${dimByTotal.currentFilter()}`);
console.log(cf.all().length);
console.log(cf.allFiltered([dimByTotalAndTip]).length);

console.log('--- 5 ---');
dimByTotal.filter(null);
console.log(cf.all().length);
console.log(cf.allFiltered().length);

console.log('--- 6 ---');
dimByTotal.filter(t => t >= 100);
console.log(cf.all().length);
console.log(cf.allFiltered([dimByTotalAndTip]).length);
