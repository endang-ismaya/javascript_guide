// Mosh Hamedani
// 1/27/2020

/*
  Private member with weakMaps();
 */

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // getter
  get radius() {
    return _radius.get(this);
  }

  // setter
  set radius(value) {
    if (value <= 0) {
      throw new Error('invalid radius');
    }

    _radius.set(this, value);
  }
}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 15;
console.log(circle.radius);
