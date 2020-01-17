// Steven Hancock
// 1/4/2020

/*
Three Methods for Setting the Prototype
* Using a constructor function
* Using Object.create(prototype)
* Using Object.setPrototypeOf(obj, prototype) -> ES6
*/

var objProto = {
  greet: function() {
    console.log(this.greeting + ' World!');
  }
};

// using a constructor
var Greeting = function(term) {
  this.greeting = term;
};

Greeting.prototype = objProto;

var obj1 = new Greeting('Object-1');
obj1.greet();

// Object.create
var obj2 = Object.create(objProto);
obj2.greeting = 'Object-2';
obj2.greet();

// Using Object.setPrototypeOf(obj, prototype) -> ES6
var obj3 = {
  greeting: 'Object-3'
};

Object.setPrototypeOf(obj3, objProto);
obj3.greet();
