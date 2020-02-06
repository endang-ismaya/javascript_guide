// Coding-Revolution
// 2.6.2020

$('.container').css({
  width: '300px',
  height: '300px',
  'background-color': 'brown',
  position: 'absolute',
  top: '0',
  left: '0'
});

const down = 40;
const right = 39;
const up = 38;
const left = 37;

$(document).keydown(function(e) {
  if (e.which === down) {
    $('.container').css({
      top: '+=10px'
    });
  }

  if (e.which === right) {
    $('.container').css({
      left: '+=10px'
    });
  }

  if (e.which === up) {
    $('.container').css({
      top: '-=10px'
    });
  }

  if (e.which === left) {
    $('.container').css({
      left: '-=10px'
    });
  }
});

// hoisting
$(document).on('click', '.block', function() {
  console.log(`block is click`);
});

$('.container').append(
  `<div class="block">This is block from JavaScript</div>`
);

// $(document).keyup(function(e) {
//   if (e.which === down) {
//     $('.container').css({
//       top: '+-10px'
//     });
//   }

//   if (e.which === right) {
//     $('.container').css({
//       left: '-=10px'
//     });
//   }
// });
