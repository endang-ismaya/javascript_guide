/* jshint esversion: 6 */
// Maps = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string';
const key2 = {};
const key3 = function() {};

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// count values
// console.log(map1.size);

// Iterating Maps
// loop using for...of to get keys and values
// for (let [key, value] of map1) {
//   console.log(`${key} -> ${value}`);
// }

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// loop with foreach
map1.forEach((value, key) => {
  console.log(`${key} -> ${value}`);
});

// Convert to Array
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array of the values
const valArr = Array.from(map1.values);

// create an array of the keys
const keyArr = Array.from(map1.keys);
