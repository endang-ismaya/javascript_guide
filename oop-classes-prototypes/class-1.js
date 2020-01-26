// BradTraversy - Udemy

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumber(x, y) {
    return x + y;
  }
}

const endang = new Person('Endang', 'Ismaya', '8-31-1984');
console.log(endang);
console.log(endang.greeting());
console.log(endang.calculateAge());
console.log(Person.addNumber(10, 10));
