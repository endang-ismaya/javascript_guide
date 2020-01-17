// Colt Steele
// 1/7/2020

function outer() {
  let movie = 'Amadeus';

  function inner() {
    console.log(movie.toUpperCase());
  }

  inner();
}

outer(); // AMADEUS
