import { Circle } from './Circle';

const circle = new Circle(10);
const draw = circle.draw();

const divDraw = document.querySelector('.draw-circle');
const html = `
  <p>${draw}</p>
`;

divDraw.insertAdjacentHTML('afterbegin', html);
