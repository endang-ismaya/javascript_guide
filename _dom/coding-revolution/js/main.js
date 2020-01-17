// documents
console.log(document.title);
console.log(document.body);
console.log(document.body.children[0].textContent);
document.body.children[0].textContent = 'This is my changes';
document.body.children[0].style.color = 'plum';

// selecting elements
// by tagname
const div = document.getElementsByTagName('div');
console.log(div);
console.log(div[2]);

// by classname
const div2 = document.getElementsByClassName('different');
console.log(div2);
console.log(div2[0]);

// by id
const div1 = document.getElementById('number-1');
console.log(div1);
console.log(div1.textContent);
div1.textContent = 'this is 1st div';

// query selector
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));

// create and insert
var div5 = document.createElement('div');
div5.textContent = 'My new created div';
div5.style.color = 'green';
div5.style.fontSize = '18px';
console.log(div5);

var divCreate = document.getElementById('create');
divCreate.appendChild(div5);

var hello3 = document.createElement('li');
hello3.textContent = 'Hello 3 from insertBefore';
console.log(hello3);

var parent = document.querySelector('.parent');
var ul = parent.querySelector('ul');
var li2 = ul.querySelectorAll('li')[1];
console.log(li2);

ul.insertBefore(hello3, li2);

// insertAdjacentElement
/*
  beforebegin
  afterbegin
  beforeend
  afterend
*/
var divBeforeBegin = document.createElement('div');
divBeforeBegin.textContent = 'divBeforeBegin';
var divAfterBegin = document.createElement('div');
divAfterBegin.textContent = 'divAfterBegin';
var divBeforeEnd = document.createElement('div');
divBeforeEnd.textContent = 'divBeforeEnd';
var divAfterEnd = document.createElement('div');
divAfterEnd.textContent = 'divAfterEnd';

parent.insertAdjacentElement('beforebegin', divBeforeBegin);
parent.insertAdjacentElement('afterbegin', divAfterBegin);
parent.insertAdjacentElement('beforeend', divBeforeEnd);
parent.insertAdjacentElement('afterend', divAfterEnd);

parent.insertAdjacentHTML('beforebegin', '<div>-this is html-</div>');

//
// remove element
//
// parent.removeChild(ul); old browser
li2.remove();

//
// Events
//
var button = document.querySelector('.my-button');

function click1() {
  console.log('click-1');
}

function click2() {
  console.log('click-2');
  button.removeEventListener('click', click1);
}

button.addEventListener('click', click1);
button.addEventListener('click', click2);

// button.onclick = function() {
//   console.log('someone click me!');
// };

// button.onmouseover = function() {
//   console.log('Mouse over !!');
// };

// button.ondblclick = function() {
//   console.log('is double click!!');
// };

//
// Propagation
//
var child = document.querySelector('.child2');
var parent = document.querySelector('.parent2');

function showChild(event) {
  event.stopPropagation();
  event.target.style.background = 'blue';
  console.log('I am green!, oops I meant Blue!');
}

function showParent(event) {
  console.log('I am red!');
}

child.addEventListener('click', showChild); // bubling effect
parent.addEventListener('click', showParent);
