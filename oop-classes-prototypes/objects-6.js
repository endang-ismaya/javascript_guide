// Mosh Hamedani
// 1/26/2020

/*
  Property Descriptor
  - configurable (add/delete)
  - enumerable (iterator)
  - writeable (can't change)
 */

let person = { name: 'John', age: 40 };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// set the property
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});

person.name = 'Moldy'; // try to change the writeable = false
person.age = 50;

console.log(person);
console.log(Object.keys(person));

// delete property of name that configurable = false
delete person.name;
console.log(person);

// delete property of age that configurable = true by default
delete person.age;
console.log(person);
