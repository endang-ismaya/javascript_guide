/* jshint esversion: 6 */
// -------------------------------------
// Exercise Mengubah Sintaks ES5 ke ES6
// -------------------------------------

// Tugas 1
// Ubahlah seluruh var pada kode JavaScript dibawah ini menjadi let atau const!

const phi = 3.14;
let power = 2;
let radius = 0;
const calculateArea = function (radius) {
    return phi * Math.pow(radius, power);
};

radius = 21;
let area21 = calculateArea(radius);

radius = 7;
let area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// Tugas 2
// Ubahlah anonymous functions dibawah ini menjadi ES6 Arrow Function!

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const doubleMe = num => num * 2;

console.log(multiply(5, 2));
console.log(divide(10, 2));
console.log(doubleMe(10));


// -------------------------------------
//  Exercise Menggunakan Map, filter dan Reduce untuk menyelesaikan tugas Sederhana
// -------------------------------------

// Tugas 1
// Buatlah sebuah code yang mentransformasi array menggunakan map!

var transformArrToLowerCase = arr => arr.map(x => x.toLowerCase());

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

// Tugas 2
// Buatlah sebuah code yang melakukan filter ke array menggunakan filter!

var filterArrUnder10 = arr => arr.filter(x => x > 10);

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

// Tugas 3
// Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!

var reduceFindMaximum = arr => arr.reduce((max, x) => (max > x) ? max : x);

console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9