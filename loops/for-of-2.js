// Colt Steele
// 1/7/2020

const movieReviews = {
  Amadeus: 10,
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8
};

for (let movie of Object.keys(movieReviews)) {
  let score = movieReviews[movie];

  console.log(`I rated ${movie} ${score}/10`);
}
