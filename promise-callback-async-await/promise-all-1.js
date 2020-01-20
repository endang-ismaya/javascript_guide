/* eslint-disable no-restricted-syntax */
// Colt Steele
// 1/20/2020
const axios = require('axios');

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

async function getPokemons() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

getPokemons();
