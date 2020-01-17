// Steven Hancock
// 1/5/2020

const fn = (function() {
  console.log('this is using variable');
})();

(function() {
  console.log('this is not using variable');
})();

(function() {
  console.log('this is also not using variable');
})();

(() => {
  console.log('this is also not using variable with arrow function');
})();
