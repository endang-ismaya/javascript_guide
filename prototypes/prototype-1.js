/*
CodingRevolution
The Complete beginner Javascript es5. es6 and JQuery course
ProtoTypes
11/17/2019
*/
// console.log(user.__proto__);

function User() {}

var user = new User();
user.name = 'Max';

console.log(user);

User.prototype.scream = function() {
  console.log('Ahhhh.....');
};

user.scream();

// ---

function FastCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.seats = 2;
  this.available = function() {
    console.log('not available for ' + this.name);
  };
}

var ford = new FastCar('Ford', 'Black');
var chevy = new FastCar('Checy', 'Blue');

ford.name = 'Mustang';
chevy.name = 'Nova';

console.log(ford);
ford.available();
console.log(chevy);
chevy.available();

for (var field in ford) {
  console.log(field);
}
