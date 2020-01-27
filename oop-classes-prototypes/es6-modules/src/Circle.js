const _radius = new WeakMap();

export class Circle {
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

  // method
  draw() {
    return `drawing a circle with radius of ${_radius.get(this)}`;
  }
}
