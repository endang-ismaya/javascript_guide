// Colt Steele
// 1/20/2020

/*
  Aysnc:
  - Async functions always return a promise
  - If the functions returns a value, the promise will be resolved with that value
  - If the functions throws an exception, the promise will be rejected
 */

/*
  Await:
  - We can only use the await keyword inside of functions declared with async
  - Await will pause the execution of the function, waiting for a promise to be resolved
 */

const axios = require('axios');

async function hello() {
  return 'Hello';
}

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X and Y both must be numbers');
  }

  return x + y;
}

add('e', 10)
  .then(res => {
    console.log(`Promise resolved with: ${res}`);
  })
  .catch(err => console.error(`Promise rejected with: ${err}`));

// Async and Await
async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.co/api/planets');
    const planets = res.data.results.map(planet => planet.name);
    console.log(planets.join('\n'));
  } catch (e) {
    console.error(e);
  }
}

getPlanets();
