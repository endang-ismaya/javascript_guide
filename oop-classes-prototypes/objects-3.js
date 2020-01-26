/*
CodingRevolution
The Complete beginner Javascript es5. es6 and JQuery course
Objects
11/17/2019
*/

const user = {
  name: 'Francis',
  lastName: 'Jones',
  age: 20,
  cars: ['Honda', 'Toyota', 'Suzuki'],
  misc: {
    hobbies: ['Skating', 'Reading', 'Saving'],
    lang: ['English', 'Spanish']
  },
  salute: function() {
    console.log(`Hi there!, my name is ${this.name}`);
  }
};

console.log(user.name);
console.log(user['name']);
console.log(user.misc.hobbies);
user.salute();

const person = {};
person.name = 'Endang';
person.age = 35;

console.log(`Hi There, I'm ${person.name} and I am ${person.age} old`);
