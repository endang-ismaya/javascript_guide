/* jshint esversion: 6 */

// Get local text-file
function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      // console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get Local JSON Data
function getJson() {
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // console.log(data);
      let output = '';

      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get External JSON Data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // console.log(data);
      let output = '';

      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

loadEventListeners();

function loadEventListeners() {
  document.getElementById('button-1').addEventListener('click', getText);
  document.getElementById('button-2').addEventListener('click', getJson);
  document.getElementById('button-3').addEventListener('click', getExternal);
}
