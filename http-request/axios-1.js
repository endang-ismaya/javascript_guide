// Colt Steele
// 1/20/2020

const axios = require('axios');

// axios.get('https://swapi.co/api/planets').then(res => {
//   console.log(res);
// });

// Axios chain request
const fetchNextPlanets = (url = 'https://swapi.co/api/planets') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  for (let i = 0; i < data.results.length; i += 1) {
    const planet = data.results[i];
    console.log(`planet: ${planet.name}`);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch(err => console.error(err));
