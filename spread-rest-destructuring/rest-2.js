/* eslint-disable node/no-unsupported-features/es-syntax */
// Colt Steele
// 1/11/2020

function sum(...nums) {
  return nums.reduce((total, curValue) => {
    return total + curValue;
  });
}

console.log(sum(10, 20, 30, 40, 50));

function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

console.log('endang', 'ismaya', 'III');

const multiply = (...nums) =>
  nums.reduce((total, curValue) => total * curValue);
console.log(multiply(10, 20, 30, 40, 50));
