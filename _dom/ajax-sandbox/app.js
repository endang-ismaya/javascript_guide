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

document.getElementById('button').addEventListener('click', loadData);

// load function data
function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open -> specified the url that we want to make
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE: ', xhr.readyState);
    };

    // onload
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const data = this.responseText;
            const output = document.getElementById('output');
            output.innerHTML = `
                <p>${data}</p>
            `;
        }
    };

    // on error
    xhr.onerror = function () {
        console.log('Request Error!!');
    };

    // old way
    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // };

    xhr.send();
}