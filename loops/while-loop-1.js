// Colt Steele
// 1/6/2020

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target}, Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!!`);
