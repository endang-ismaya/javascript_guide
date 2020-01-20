/* jshint esversion: 6 */

class EasyHTTP3 {

  // Make an HTTP Get Request
  async get(url) { //jshint ignore:line
    const response = await fetch(url); //jshint ignore:line
    const resData = await response.json(); //jshint ignore:line
    return resData;
  }

  // Make an HTTP Post Request
  async post(url, data) { //jshint ignore:line

    const response = await fetch(url, { //jshint ignore:line
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const resData = await response.json(); //jshint ignore:line
    return resData;
  }

  // Make an HTTP Put Request
  async put(url, data) { //jshint ignore:line
    const response = await fetch(url, { //jshint ignore:line
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json(); //jshint ignore:line
    return resData;
  }

  // Make an HTTP Delete Request
  async delete(url, data) { //jshint ignore:line
    const response = await fetch(url, { //jshint ignore:line
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'Resource Deleted...'; //jshint ignore:line
    return resData;
  }

}