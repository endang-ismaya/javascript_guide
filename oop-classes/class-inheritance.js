/* jshint esversion: 6 */
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

class Customer extends Person {
    constructor(firstName, lastName, dob, phone, membership) {
        super(firstName, lastName, dob);
        this.phone = phone;
        this.membership = membership;
    }

    // override
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}, good morning!`;
    }
}

const john = new Customer('John', 'Doe', '8/31/1981', '555-555-5555', 'Standard');

console.log(john);
console.log(john.greeting());