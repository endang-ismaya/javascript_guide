/* eslint-disable node/no-unsupported-features/es-syntax */
// Colt Steele
// 1/11/2020

/*
  SPREAD
  Spread syntax allows an iterable such as an array to be expanded in places
  where zero or more arguments (for function calls) or elements (for array literals) are expected,
  or an object expression to be expanded in places where zero or more key-value pairs
  (for object literal) are expected.
 */

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const color = ['red', 'orange', 'yellow', 'green'];

giveMeFour(color);
giveMeFour(...color);

const str = 'GOAT';
giveMeFour(...str);

// combine array
const parent = ['endang', 'indah'];
const kids1 = ['alde', 'aqeela'];
const kids2 = ['auza', 'arsyila'];

const family = [...parent, ...kids1, ...kids2];
console.log(family);

// copy or combine object
const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};
