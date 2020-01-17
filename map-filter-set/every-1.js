// Colt Steele
// 1/8/2020

const books = [
  {
    title: 'title 1',
    author: 'author 1',
    rating: 4.5
  },
  {
    title: 'title 2',
    author: 'author 2',
    rating: 4.7
  },
  {
    title: 'title 3',
    author: 'author 3',
    rating: 4.8
  },
  {
    title: 'title 4',
    author: 'author 4',
    rating: 4.4
  }
];

const allRatingIsAbove4 = books.every(b => b.rating > 4.0);
console.log(`all books rating is above 4: ${allRatingIsAbove4}`);

const someRatingIsAbove4Point5 = books.some(b => b.rating > 4.5);
console.log(`some books rating is above 4.5: ${someRatingIsAbove4Point5}`);
