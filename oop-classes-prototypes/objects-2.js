// BradTraversy - Udemy
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 34,
  email: 'steve.smith@outlook.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;

val = person;

// get spesific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
