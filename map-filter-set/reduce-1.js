// Colt Steele
// 1/8/2020

const nums = [2, 3, 4, 5, 6, 7, 8];

const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

console.log(product);

// check the max value
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 61];

const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});

const maxWithMath = grades.reduce((max, currentVal) =>
  Math.max(max, currentVal)
);
const minWithMath = grades.reduce((max, currentVal) =>
  Math.min(max, currentVal)
);

console.log(`Max Grade from ${grades.join(' ')} is ${maxGrade}`);
console.log(`Max Grade from ${grades.join(' ')} is ${maxWithMath}`);
console.log(`Min Grade from ${grades.join(' ')} is ${minWithMath}`);

//
const votes = ['y', 'y', 'y', 'n', 'y', 'n', 'y', 'y', 'y', 'n', 'n'];

// const results = votes.reduce((tally, currentVal) => {
//   if (tally[currentVal]) {
//     tally[currentVal] += 1;
//   } else {
//     tally[currentVal] = 1;
//   }
//   return tally;
// }, {});

const results = votes.reduce((tally, currentVal) => {
  tally[currentVal] = (tally[currentVal] || 0) + 1;
  return tally;
}, {});

console.log(results);

//
const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
];

const newBook = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) {
    groupedBooks[key] = [];
  }

  groupedBooks[key].push(book);
  return groupedBooks;
}, {});

console.log(newBook);
