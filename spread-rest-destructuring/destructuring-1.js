// Maximilian Accelerated ES6 Training

// DestructuringArray
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a, b, c);

let [d, ...e] = numbers;
console.log(e);

let [f = 'others', g, h, i = 'default'] = numbers;
console.log(f, g, h, i);

// swap values
let j = 5;
let k = 10;
[k, j] = [j, k];
console.log(`j = ${j}, k = ${k}`);

// DestructuringObjects
let obj = {
  name: 'Max',
  age: 27,
  greet: function() {
    console.log('Hello there!');
  }
};

let { name, age, greet: hello } = obj; // name have to match name => name, age => age, greet => greet
console.log(name, age, hello);
hello();
