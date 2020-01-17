// Colt Steele
// 1/7/2020

// Functions as return value
// Can make a Function Factory
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(5));
console.log(double(5));

function makeBetweenFunc(x, y) {
  return function(num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(17));
