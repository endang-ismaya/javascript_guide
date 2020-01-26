// Mosh Hamedani
// 1/25/2020

/*
  Getter and Setter
 */

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; // private variable

  // Get the private defaultLocation
  // method #1
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  // method#2
  Object.defineProperty(this, 'defaultLocation2', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error(`Invalid location!`);
      }
      defaultLocation = value;
    }
  });

  this.draw = function() {
    console.log(`draw with radius ${this.radius}`);
  };
}

// Accessing Object
const circle = new Circle(20);
circle.draw();
console.log(circle.getDefaultLocation()); // calling private method #1
console.log(circle.defaultLocation2); // calling private method #2

circle.defaultLocation2 = 1; // will throw an Error invalid location
