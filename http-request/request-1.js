/*
Coding Revolution
The complete beginner Javascript ES5, ES6 and JQuery course
Http Request
11/17/2019
*/
var { XMLHttpRequest } = require('xmlhttprequest');

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
var method = 'GET';

http.open(method, url);
http.onreadystatechange = function() {
  console.log('hmm...');

  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log('it works here!');
    console.log(JSON.parse(http.response));
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log('something went wrong!');
  }
};

http.send();
