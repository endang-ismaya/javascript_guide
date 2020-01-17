// BradTraversy - Udemy
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

// without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job ' + job + '</li><li>City: ' + '</li></ul>';

// with template literal (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;

console.log(html);
