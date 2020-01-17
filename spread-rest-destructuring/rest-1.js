// Maximilian Accelerated ES6 Training
function sumUp(...toAdd) {
  console.log(toAdd);
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }

  return result;
}

console.log(sumUp(100, 20, 10));
console.log(sumUp(100, 20, '10'));
