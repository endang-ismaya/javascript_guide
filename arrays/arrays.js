// array creation
const items = [];

// add items
items.push('one');
items.push('two');
items.push('three');

//
// console.log(items);

// copy arrays
const copyItems = [...items];
// console.log(copyItems);

// To convert an iterable object to an array, use spreads ... instead of Array.from.
// const foo = document.querySelectorAll('.foo');
// const nodes = [...foo];

// Use Array.from for converting an array-like object to an array.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr = Array.from(arrLike);
// console.log(arr);

// Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
// const baz = Array.from(foo, bar);

const numbers = [43, 56, 33, 23, 44, 36, 5];
let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];

// insert
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// add on to end
numbers.push(250);

// add on to front
numbers.unshift(120);

// take off from end
numbers.pop();

// take off from front
numbers.shift();

// splice value
numbers.splice(1, 1);

// reverse
numbers.reverse();

// concatenate
val = numbers.concat([30, 31, 32]);

// sorting
val = numbers.sort(function(a, b) {
  return a > b;
});

val = numbers.sort(function(a, b) {
  return b > a;
});

// find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
