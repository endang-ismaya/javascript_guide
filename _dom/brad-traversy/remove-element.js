/* jshint esversion: 6 */
var doc = document;

// ---------------
// Replace Element
// ---------------
const newHeading = doc.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New textnode
newHeading.appendChild(doc.createTextNode('Task list'));

// Get the old heading
const oldHeading = doc.getElementById('task-title');
// Parent
const cardAction = doc.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// ---------------
// Remove Element
// ---------------
const lis = doc.querySelectorAll('li');
const list = doc.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// classes and attributes
const firstLi = doc.querySelector('li:first-child');
const firstLiLink = firstLi.children[0];

let val;

val = firstLiLink.className;
val = firstLiLink.classList;
val = firstLiLink.classList[0];
firstLiLink.classList.add('test');
// firstLiLink.classList.remove('test');
val = firstLiLink;

// attributes
val = firstLiLink.getAttribute('href');
val = firstLiLink.setAttribute('href', 'http://google.com');
val = firstLiLink.setAttribute('target', '_blank');
// check if attributes is exist
val = firstLiLink.hasAttribute('href');
// delete attributes
firstLiLink.removeAttribute('target');

console.log(firstLiLink);