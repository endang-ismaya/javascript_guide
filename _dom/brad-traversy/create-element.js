/* jshint esversion: 6 */
// Create element
var doc = document;

const li = doc.createElement('li');

// Add Class
li.className = 'collection-item';

// Add Id
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
const liText = doc.createTextNode('Hello World');
li.appendChild(liText);

// Create new link element
const delLink = doc.createElement('a');
delLink.className = 'delete-item secondary-content'; // add className
delLink.innerHTML = '<i class="fa fa-remove"></i>'; // add new innerHtml
li.appendChild(delLink);

// Append li as child to ul
doc.querySelector('ul.collection').appendChild(li);

console.log(li);
