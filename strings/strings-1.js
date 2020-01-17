// BradTraversy - Udemy
const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello my name is William Johnson';
const hobbies = 'Cooking,Selfying,Reading';

let val;
// concatenation
val = firstName + ' ' + lastName; // William Joshnson

// Append
val = 'Brad '; // Brad
val += 'Traversy'; // Brad Traversy

// Escaping
val = "That's awesome, I can't wait"; // That's awesome, I can't wait
val = "That's awesome, I can't wait"; // That's awesome, I can't wait

// length
val = firstName.length; // 7

// concat
val = firstName.concat(' ', lastName); // William Johnson

// change case
val = firstName.toUpperCase(); // WILLLIAM JOHNSON
val = firstName.toLowerCase(); // william johnson

// index
val = firstName[0]; // W
val = firstName.indexOf('L'); // -1
val = firstName.lastIndexOf('l'); // 3

// chartAt
val = firstName.charAt('2'); // l

// get last char
val = firstName.charAt(firstName.length - 1); // m

// substring
val = firstName.substring(0, 4); // Will

// slice
val = firstName.slice(0, 4); // Will
val = firstName.slice(-3); // iam
val = firstName.slice(1); // illiam

// split
val = str.split(' ');
val = hobbies.split(',');

// replace
val = str.replace('William', 'Jack');

// includes
val = str.includes('name');

console.log(val);
