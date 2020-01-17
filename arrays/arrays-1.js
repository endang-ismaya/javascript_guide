// Create an array
var array = [1, 2, 3];

// How many values inside the array
console.log(array.length);

// console log the third one
console.log(array[2]);

// change the third one
array[2] = 78;

// add a fourth value
array[3] = 100;

// add a sixth value
array[5] = 104;

// add a value at the end of the array
array.push(4500);

// remove the last value of the array
array.pop();

// subtract the last value in a variable
var last = array.pop();
console.log('last: ' + last);

// remove the first value of the array
array.shift();

// subtract the first into a variable
var first = array.shift();
console.log('fist: ' + first);

// add a value at the beginning of the array
array.unshift(1000);

console.log(array);

// indexOf()
var names = ['John', 'Helen', 'Francis', 'Mark'];
console.log(names.indexOf('helen'));

// splice()
// names.splice(1); // remove everything from array position #1
names.splice(1, 1);

// slice()
var newNames = names.slice(1, 2);
console.log(newNames);

console.log(names);

// concat
var otherNames = ['Susi', 'Joko', 'Bagus'];

var finalArray = names.concat(otherNames);
console.log(finalArray);

// Join
console.log(finalArray.join('\n'));

// new arrays
var array2 = [1, 5, 10, 20, 30];
var names2 = ['John', 'Helen', 'Frances', 'Mark', 'Helen'];

// filter
var filters = array2.filter(function(item) {
  return item > 9;
});
console.log(filters);

var filteredNames = names2.filter(function(item) {
  return item.indexOf('e') > 0;
});
console.log(filteredNames);

// map
var mapArray = array2.map(function(number) {
  return number * 10;
});
console.log(mapArray);

// foreach
names2.forEach(function(name) {
  console.log('member is: ' + name);
});

// foreach
