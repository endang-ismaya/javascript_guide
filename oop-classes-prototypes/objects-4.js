/* eslint-disable guard-for-in */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
// Reed Barger
// 1/26/2020

/*
  Iterating over an Object
 */

const user = {
  fullName: 'Endang Ismaya',
  email: 'endang.ismaya@gmail.com',
  mobile: '6281387087080',
  city: 'Tangerang'
};

// using hasOwnProperty
for (let u in user) {
  if (user.hasOwnProperty(u)) {
    console.log(`${u}: ${user[u]}`);
  }
  console.log(u);
}

// Object.keys
for (let u of Object.keys(user)) {
  console.log(`${u}: ${user[u]}`);
}

// Object entries (ES7 Feature)
Object.entries(user).forEach(([key, value]) => console.log(`${key}: ${value}`));
