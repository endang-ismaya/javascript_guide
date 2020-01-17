// Brad Traversy
let val;

// --
// Number to string
// --
val = 5;
val = String(555);
val = String(4 + 4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date()); // Mon Dec 10 2018 07:36:53 GMT-0800 (Pacific Standard Time)

// Array to string
val = String([1, 2, 3, 4]); // 1,2,3,4

// toString() Method
val = (5).toString(); // 5
val = (true).toString(); // true

// --
// String to number
// --
val = Number('5'); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('Hello'); // Nan
val = Number([1, 2, 3]); // Nan

val = parseInt('100'); // 100
val = parseInt('100.30'); // 100

val = parseFloat('100.35'); // 100.35

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
