// i = case insensitive
// g = Global search

let re;
re = /hello/i;

const str = 'Hello There';

// console.log(re); // /hello/
// console.log(re.source); // hello

// --------------------------------------------
// exec() : return result in an array or null
// --------------------------------------------
let result = re.exec('brad hello world');
console.log(result); // {'hello, index: 5, input: 'brad hello world;, groups: undefined}
console.log(result[0]); // hello
console.log(result.index); // 5
console.log(result.groups); // undefined

// --------------------------------------------
// test() : return true or false
// --------------------------------------------
result = re.test('Hello');
console.log(result); // true

// --------------------------------------------
// match() : return result array or null
// --------------------------------------------
result = str.match(re);
console.log(result); // [ 'Hello', index: 0, input: 'Hello There', groups: undefined ]

// --------------------------------------------
// search() : return index of the first match if not found return -1
// --------------------------------------------
result = str.search(re);
console.log(result); // 0

// --------------------------------------------
// replace() : return new string with some or all matched pattern
// --------------------------------------------
const newStr = str.replace(re, 'Hi');
console.log(newStr); // Hi There
