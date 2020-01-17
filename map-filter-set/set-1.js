/* jshint esversion: 6 */

// SETS - store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

console.log(set1);

const set2 = new Set([1, 'a', true]);
console.log(set2);

// get count
console.log(set1.size);

// check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'}));

// Delete from set
set1.delete(100);

console.log(set1);

// Iterating
for (let item of set1) {
  console.log(item);
}

set1.forEach(element => {
  console.log(element);
});

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
