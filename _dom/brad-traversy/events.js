// document.querySelector('.clear-tasks').addEventListener('click', function() {
//     console.log('Hello World');
//     // e.preventDefault();
// });
function onClick(e) {
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event Type
  val = e.type;

  // TimeStamp
  val = e.timeStamp;

  // coord event relation to the window
  val = e.clientY;
  val = e.clientX;

  console.log(val);
}

var btnClear = document.querySelector('a.clear-tasks');
btnClear.addEventListener('click', onClick);
