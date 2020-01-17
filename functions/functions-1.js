function add(x, y) {
  return x + y;
}

function divide(x, y) {
  if (y === 0) {
    return "You can't divide by 0!";
  }

  return x / y;
}

// Test
var result = divide(1, 100);
console.log(result);

console.log('%cExtra Large Yellow Text with Red Background', 'background: red; color: yellow; font-size: x-large');

// Anynomous function
// function expression
var hi = function(type) {
  if (type === 'boss') {
    return function(name) {
      console.log('Hi Boss, ' + name);
    };
  }
  return function(name) {
    console.log('Hi, ' + name);
  };
};

var returnFunction = hi('boss');
returnFunction('Alde');

var returnFunctionBiasa = hi('pegawai');
returnFunctionBiasa('Budi');
