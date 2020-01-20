/* jshint esversion: 6 */
// var http = new easyHTTP();
const http = new EasyHTTP3();


// Get Users with EasyHTTP-3
http.get('https://jsonplaceholder.typicode.com/users')
                .then(data => console.log(data))
                .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@jdoe.com'
};

// Create User
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Update User
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/3', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Get Users
// EasyHTTP 2
// http.get('https://jsonplaceholder.typicode.com/users')
//                 .then(data => console.log(data))
//                 .catch(err => console.log(err));

// User Data
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@jdoe.com'
// };

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// // Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/3', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// // Get Posts
// easyHTTP
// var posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });
// // Single post
// var posts = http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// Create Data
// var data = {
//     title: 'Custom Post',
//     body: 'This is a custom post'
// };

// // Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

// update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

// Delete Post
// var posts = http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });