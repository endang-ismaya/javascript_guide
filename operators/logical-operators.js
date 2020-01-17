/*
    LOGICAL OPERATORS

    0 - false, 1 - true
    ! -> NOT

    !(0) -> the result to 1
    !(1) -> the result to 0

    && -> conjunction (AND)
    || -> disjunction (OR / Alternative)
*/

var a = 7;
var b = 3;

if (a > b && b === 5) {
  console.log('here is AND');
} else if (a > b || b === 5) {
  console.log('here is OR');
}
