setTimeout(function() {
  console.log('Howdy partner!');
}, 2000);

// run in every interval
var howdyLoop = setInterval(function() {
  console.log('howdy setInterval...');
}, 2000);

setTimeout(function() {
  clearInterval(howdyLoop);
}, 6000);
