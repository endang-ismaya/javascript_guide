// Steven Hancock
// 1/5/2020

let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house'];

// case sensitive sort
console.log(things.sort());

// case insensitive sort
// sort in the case is act as High Order Function
const sortInsensitive = things.sort(function(a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
});

console.log(sortInsensitive);
