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

// load all event listeners
loadEventListeners();

function loadEventListeners() {
    document.getElementById('button1').addEventListener('click', loadCustomer);
    document.getElementById('button2').addEventListener('click', loadCustomers);
}


function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    // open xhr
    xhr.open('GET', 'customer.json', true);

    // onload
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
            const uiCustomer = document.getElementById('customer');

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            uiCustomer.innerHTML = output;
        }
    };
    // xhr send
    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    // open xhr
    xhr.open('GET', 'customers.json', true);

    // onload
    xhr.onload = function () {
        if (this.status === 200) {

            const customers = JSON.parse(this.responseText);
            const uiCustomer = document.getElementById('customers');
            let output = '';

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            });

            uiCustomer.innerHTML = output;
        }
    };

    // xhr send
    xhr.send();
}