/* eslint-disable no-restricted-syntax */
// Colt Steele
// 1/7/2020

function add(x, y) {
  return x + y;
}

const subtract = function(x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function(x, y) {
  return x / y;
};

// operations -> High Order Functions
const operations = [add, subtract, multiply, divide];

console.log(operations[0](100, 20));
console.log(operations[1](100, 20));
console.log(operations[2](100, 20));
console.log(operations[3](100, 20));

for (let func of operations) {
  console.log(func(20, 5));
}
