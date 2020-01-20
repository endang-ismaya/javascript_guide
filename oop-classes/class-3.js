/* eslint-disable max-classes-per-file */
// Colt Steele
// 1/20/2020

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }

  meow() {
    return 'Meowww!!!';
  }
}

class Dog extends Pet {
  bark() {
    return 'Wooff';
  }

  eat() {
    return `${this.name} scarfs his food`;
  }
}

const dog = new Dog('mounty', 13);
console.log(dog.eat());
console.log(dog.bark());
