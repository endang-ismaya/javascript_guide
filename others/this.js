// Colt Steele
// 1/12/2020

/*
  The value of 'this' depends on
  the invocation context the function it is used in.
 */

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person`);
  },
  laugh: () => {
    console.log(this); // this is refer to windows object
    console.log(`${this.nickName} says 'WHO AM I?`);
  }
};

console.log(person.fullName());
console.log(person.printBio());
console.log(person.laugh());
