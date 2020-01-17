/*
    Shortened conditional statement called operator ?

    (expression) ? return_it_the_expression_is_true : return_if_the_expression_is_false;
*/

var x = 2;
var isEven;

if (x % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

// short way
isEven = x % 2;
console.log(isEven);
