/* jshint esversion: 6 */

function nameIterator(names) {
  let nextIndex = 0;
  // let prevIndex = nextIndex - 1;

  // console.log(nextIndex);
  // console.log(prevIndex);

  return {
    next: function() {
      // console.log(nextIndex);
      return nextIndex < names.length ? { value: names[nextIndex++], done: false} : {done: true};
    },
    prev: function() {
      // console.log(nextIndex);
      nextIndex--;
      return nextIndex >= 0 ? { value: names[nextIndex-1], done: false} : {done: true};
    }
  };
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.prev().value);
console.log(names.prev().value);
console.log(names.prev().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.prev().value);
console.log(names.next().value);
console.log(names.next().value);
