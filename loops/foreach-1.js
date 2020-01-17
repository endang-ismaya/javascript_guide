// Colt Steele
// 1/8/2020

const numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

numbers.forEach(function(num) {
  console.log(num * 2);
});

const printTripe = function(num) {
  console.log(num * 3);
};

numbers.forEach(printTripe);

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
  }
];

books.forEach(function(book) {
  console.log(book.title.toUpperCase());
});
