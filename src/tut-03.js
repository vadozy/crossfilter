const Crossfilter = require('crossfilter2');

const data = [
  {date: '2011-11-14T16:17:54Z', quantity: 2, total: 190, tip: 100, type: 'tab'},
  {date: '2011-11-14T16:20:19Z', quantity: 2, total: 190, tip: 100, type: 'tab'},
  {date: '2011-11-14T16:28:54Z', quantity: 1, total: 300, tip: 200, type: 'visa'},
  {date: '2011-11-14T16:30:43Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T16:48:46Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T16:53:41Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T16:54:06Z', quantity: 1, total: 100, tip: 0, type: 'cash'},
  {date: '2011-11-14T16:58:03Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T17:07:21Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T17:22:59Z', quantity: 2, total: 90, tip: 0, type: 'tab'},
  {date: '2011-11-14T17:25:45Z', quantity: 2, total: 200, tip: 0, type: 'cash'},
  {date: '2011-11-14T17:29:52Z', quantity: 1, total: 200, tip: 100, type: 'visa'},
];

console.log('--- 1 ---');
const payments = Crossfilter(data);
console.log(payments);
console.log(payments.all()[0] === data[0]);
console.log(payments.allFiltered()[0] === data[0]);

const paymentsByTotalAndTip = payments.dimension(d => d.total + d.tip);
console.log('--- 2 ---');
console.log(paymentsByTotalAndTip.top(2));
console.log('--- 3 ---');
console.log(paymentsByTotalAndTip.bottom(2));
console.log('--- 4 ---');
console.log(paymentsByTotalAndTip.filter(290).top(2));
