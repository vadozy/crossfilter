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

const dimByTotalAndTip = cf.dimension(d => d.total + d.tip);
console.log('--- 2 --- dim');
console.log(dimByTotalAndTip);

const groupByRoundedTotalAndTip = dimByTotalAndTip.group(v => 100 * Math.floor(v / 100));
console.log('--- 3 --- group');
console.log(groupByRoundedTotalAndTip);
console.log(`groupByRoundedTotalAndTip.size() -> ${groupByRoundedTotalAndTip.size()}`);
console.log(groupByRoundedTotalAndTip.top(10));

groupByRoundedTotalAndTip.reduceSum(v => v.total + v.tip);
console.log('--- 4 --- groupByRoundedTotalAndTip.reduceSum(...)');
console.log(groupByRoundedTotalAndTip);
console.log(`paymentGroups.size() -> ${groupByRoundedTotalAndTip.size()}`);
console.log(groupByRoundedTotalAndTip.top(10));

const reducer = side => {
  return (p, v) => {
    return p + side * (v.total + v.tip);
  }
}
groupByRoundedTotalAndTip.reduce(reducer(1), reducer(-1), () => 0);
console.log('--- 5 --- groupByRoundedTotalAndTip.reduce(...)');
console.log(`paymentGroups.size() -> ${groupByRoundedTotalAndTip.size()}`);
console.log(groupByRoundedTotalAndTip.top(10));

groupByRoundedTotalAndTip.reduceCount();
console.log('--- 6 --- groupByRoundedTotalAndTip.reduceCount()');
console.log(groupByRoundedTotalAndTip);
console.log(`paymentGroups.size() -> ${groupByRoundedTotalAndTip.size()}`);
console.log(groupByRoundedTotalAndTip.top(10));
