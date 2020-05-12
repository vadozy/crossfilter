const RANDOM_RECORDS_NUMBER = 1000000;

const fruits = [
  { name: 'apple', calories: 95, price: 0.9 },
  { name: 'orange', calories: 45, price: 1.25 },
  { name: 'lemon', calories: 17, price: 1.5 },
  { name: 'pear', calories: 102, price: 1.2 },
  { name: 'mellon', calories: 186, price: 2.5 },
  { name: 'banana', calories: 105, price: 0.5 },
];

const data = [];

for (let i = 0; i < RANDOM_RECORDS_NUMBER; i++) {
  const fruit = fruits[Math.floor(Math.random() * fruits.length)];
  const int1 = Math.floor(Math.random() * 10) + 1;
  const int2 = Math.floor(Math.random() * 100) + 1;
  const float1 = Math.random() * 10;
  const float2 = Math.random() * 10;

  const record = {
    fruit: fruit.name,
    calories: fruit.calories,
    price: fruit.price,
    int1,
    int2,
    float1,
    float2,
  };

  data.push(record);
}

module.exports = data;
