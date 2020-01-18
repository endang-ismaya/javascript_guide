/* eslint-disable no-restricted-syntax */
// Colt steele
// 1/18/2020

const fetch = require('cross-fetch');

const checkStatusAndParse = res => {
  if (!res.ok) {
    throw new Error(`Status code error: ${res.status}`);
  }
  return res.json();
};

const printPlanets = data => {
  console.log(`Fetch all planets (next 10)`);
  for (let planet of data.results) {
    console.log(`${planet.name}`);
  }
  return Promise.resolve(data.next);
  // const p = new Promise((resolve, reject) => {
  //   resolve(data);
  // });
  // return p;
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets') => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(err => {
    console.error(err);
    console.log(`Something went wrong with the fetch`);
  });

// fetch('https://swapi.co/api/planets')
//   .then(response => {
//     response.json().then(data => {
//       // console.log(data);
//       for (let planet of data.results) {
//         console.log(planet.name);
//       }
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   });

// fetch('https://swapi.co/api/planets')
//   .then(res => {
//     if (res.status >= 400) {
//       throw new Error('Bad response from server.');
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
