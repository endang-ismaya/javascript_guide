// Coding-Revolution
// 2/6/2020

// getting data attributes
const dataTitle = $('.parent').data('title');
const dataNames = $('.parent').data('names');
const data = $('.parent').data();

console.log(dataTitle);
console.log(dataNames);
console.log(data);

// set data attributes
const cars = ['Toyota', 'Honda', 'Mazda'];
$('.parent').data('cars', cars);
console.log($('.parent').data());
