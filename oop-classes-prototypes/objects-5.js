/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
// Reed Barger
// 1/26/2020

/*
  Convert Object to Array
 */

const person = { name: 'Amy', age: 40 };

// using forEach
const arr = [];
Object.keys(person).forEach(key => arr.push([key, person[key]]));
console.log(arr);

// using map
const result = Object.keys(person).map(key => [key, person[key]]);
console.log(result);

// using entries
console.log(Object.entries(person));

/*
  Check if Property is in Object
 */
const property = 'name' in person;
console.log(property);

const propertyAge = person.hasOwnProperty('age');
console.log(propertyAge);
