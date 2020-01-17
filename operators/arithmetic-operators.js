/*
    OPERATOR - Characters used to operate on variables

    ARITHMETIC operators
    +   adding numbers and meging strings
    -   subtraction
    *   multiplying
    /   dividing

    %   the remainder of the division (mod operator)

    =   assigning value
    +=
    -=
    /=
    *=
    %=

    ++  incrementation
    --  decrementation
*/

// ---------------------
// modulus
// ---------------------
function callEvensOdd() {
  var evens = [];
  var odds = [];

  for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
      evens.push(index);
    } else {
      odds.push(index);
    }
  }

  return [evens, odds];
}

console.log(callEvensOdd()[0]);
console.log(callEvensOdd()[1]);
