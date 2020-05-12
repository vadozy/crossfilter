/* eslint-disable no-unused-vars */
const data = require('./data');
const Crossfilter = require('crossfilter2');

console.log(`size of random data: ${data.length}`);

console.time('crossfilter creation');
const cf = Crossfilter (data);
console.timeEnd('crossfilter creation');

console.time('dim creation');
const dimFruit = cf.dimension(d => d.fruit);
console.timeEnd('dim creation');

console.time('dim creation');
const dimFruitNameLength = cf.dimension(d => d.fruit.length);
console.timeEnd('dim creation');

console.time('dim creation');
const dimCalories = cf.dimension(d => d.calories);
console.timeEnd('dim creation');

console.time('dim creation');
const dimPrice = cf.dimension(d => d.price);
console.timeEnd('dim creation');

console.time('dim creation');
const dimPricePerCalory = cf.dimension(d => d.price / d.calories);
console.timeEnd('dim creation');

console.time('dim creation');
const dimCaloriesPerDollar = cf.dimension(d => d.calories / d.price);
console.timeEnd('dim creation');

console.time('dim creation');
const dim1 = cf.dimension(d => Math.floor(d.float1 * d.float2));
console.timeEnd('dim creation');

console.time('dim creation');
const dim2 = cf.dimension(d => d.int1 - d.int2);
const oldFilter = dim2.filter;
dim2.filter = (...args) => {
  console.log('Calling Filter');
  oldFilter.call(dim2, ...args);
};
console.timeEnd('dim creation');

// --------------------
console.time('dim top(2)');
let _ = dim1.top(2);
console.timeEnd('dim top(2)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim2.filter(d => d < 0)');
dim2.filter(d => d < 0);
console.timeEnd('dim2.filter(d => d < 0)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(d => d < 10)');
dim1.filter(d => d < 10);
console.timeEnd('dim1.filter(d => d < 10)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(null)');
dim1.filter(null);
console.timeEnd('dim1.filter(null)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(d => d < 9)');
dim1.filter(d => d < 9);
console.timeEnd('dim1.filter(d => d < 9)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);


// --------------------
// --------------------
console.time('grp creation');
const grpFruit = dimFruit.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grpFruitNameLength = dimFruitNameLength.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grpCalories = dimCalories.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grpPrice = dimPrice.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grpPricePerCalory = dimPricePerCalory.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grpCaloriesPerDollar = dimCaloriesPerDollar.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grp1 = dim1.group();
console.timeEnd('grp creation');

console.time('grp creation');
const grp2 = dim2.group();
console.timeEnd('grp creation');

// --------------------
// --------------------
console.time('dim1.filter(null)');
dim1.filter(null);
console.timeEnd('dim1.filter(null)');

console.time('dim2.filter(null)');
dim2.filter(null);
console.timeEnd('dim2.filter(null)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);
// --------------------

console.time('dim top(2)');
_ = dim1.top(2);
console.timeEnd('dim top(2)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim2.filter(d => d < 0)');
dim2.filter(d => d < 0);
console.timeEnd('dim2.filter(d => d < 0)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(d => d < 10)');
dim1.filter(d => d < 10);
console.timeEnd('dim1.filter(d => d < 10)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(null)');
dim1.filter(null);
console.timeEnd('dim1.filter(null)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// --------------------
console.time('dim1.filter(d => d < 9)');
dim1.filter(d => d < 9);
console.timeEnd('dim1.filter(d => d < 9)');

console.time('cf.allFiltered().length');
_ = cf.allFiltered().length;
console.timeEnd('cf.allFiltered().length');
console.log(_);

// ------------------
console.time('grp1 top(2)');
_ = grp1.top(2);
console.timeEnd('grp1 top(2)');

console.time('grp2 top(2)');
_ = grp2.top(2);
console.timeEnd('grp2 top(2)');
