/* jshint esversion: 6 */

/*
    HTTP Statuses:
    * 200: "OK"
    * 403: "Forbidden"
    * 404: "Not Found"

    readyState Values:
    * 0: request not initialized
    * 1: server connection established
    * 2: request received
    * 3: processing request
    * 4: request finished and response is ready
*/

function getJokes(e) {
  // console.log('get jokes');

  const number = document.querySelector('input[type=number]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const responses = JSON.parse(this.responseText);
      const uiJokes = document.querySelector('.jokes');

      let output = '';

      if (responses.type === 'success') {
        responses.value.forEach(jokes => {
          output += `
                        <li>${jokes.joke}</li>
                    `;
        });
      } else {
        output += '<li>Something went wrong!</li>';
      }

      uiJokes.innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

function loadEventListeners() {
  document.querySelector('.get-jokes').addEventListener('click', getJokes);
}

// load all event listeners
loadEventListeners();
