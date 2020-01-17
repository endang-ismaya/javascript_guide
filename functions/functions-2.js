/* jshint esversion: 6 */
// BradTraversy - Udemy

// Function Declaration
function greet(firstName = 'John', lastName = 'Doe') {
    return 'Hello ' + firstName + ' ' + lastName;
}
// console.log(greet('Endang', 'Ismaya'));


// Function Expression
const square = function (x = 3) {
    return x*x;
};
// console.log(square());

// Immidiately Invokable function expression - IIFEs
(function() {
    console.log('IIFE ran..');
})();

(function(name) {
    console.log('Hello ' + name);
})('Endang');


// Property Methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function() {
    console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
