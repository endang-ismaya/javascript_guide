// IIF (immediately invoke functions)
(function showName() {
  console.log('Francis');
})();

var number = 5;
(function showNumber(value) {
  // eslint-disable-next-line no-shadow
  var number = value + 5;
  console.log(number);
})(number);

console.log(number);

// Build in functions
var name = '    Darth Vader ';

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// trim white spaces
console.log(name.trim());

// get the amout of characters
console.log(name.length);

// get a spesific char
console.log(name[5]);
console.log(name.charAt(6));

// merget it with a different string
console.log(name.trim().concat(' The Living Legend!'));

// split every word of it
console.log(name.trim().split(' '));
