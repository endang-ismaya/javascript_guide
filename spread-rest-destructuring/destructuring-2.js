// Colt Steele
// 1/12/2020

/*
  DESTRUCTURING
  A short, clean syntax to 'unpack'
  - Values from arrays
  - Properties from objects
  Into disctict variables
 */

// Destructuring Array
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

const [gold, silver, bronze] = raceResults;

console.log(`Gold: ${gold}`);
console.log(`Silver: ${silver}`);
console.log(`Bronze: ${bronze}`);

//
const [first, , , forth] = raceResults;
const [winner, ...others] = raceResults;

console.log(`first: ${first}, forth: ${forth}`);
console.log(`winner: ${winner}, others: ${others.join(', ')}`);

// Destructuring Object
const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
};

const { firstName, lastName } = runner;

console.log(`runner: ${firstName} ${lastName}`);

// assignment in destructuring
const { country: nation, title: honorific } = runner;
console.log(`nation: ${nation}, title: ${honorific}`);
