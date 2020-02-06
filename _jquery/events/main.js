// Coding-Revolution
// 2.6.2020

const colors = [
  'indianred',
  'greenyellow',
  'bisque',
  'burlywood',
  'crimson',
  'lightpink',
  'olive',
  'maroon',
  'orange',
  'coral',
  'tomato',
  'snow',
  'whitesmoke',
  'beige',
  'ivory',
  'antiquewhite',
  'plum',
  'khaki',
  'black',
  'fuchsia',
  'darkslateblue',
  'navy',
  'deepskyblue',
  'dodgerblue',
  'magenta',
  'blueviolet',
  'indigo',
  'orchid',
  'darkviolet'
];

$('.container').css({
  display: 'flex',
  'justify-content': 'center',
  'margin-top': '15px'
});

$('button').css({
  'font-family': 'nunito',
  padding: '15px',
  'background-color': 'khaki',
  color: 'darkviolet',
  'font-weight': 'bold',
  'border-radius': '8px',
  cursor: 'pointer',
  outline: 'none',
  'margin-top': '20px'
});

$('.text-box1').text('Hello !!!');
$('.text-box1').css({
  padding: '10px'
});
$('.box1').css({
  width: '500px',
  height: '300px',
  'background-color': 'brown',
  'text-align': 'center',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  color: 'aliceblue',
  'font-size': '3.25em',
  'font-weight': '700',
  'letter-spacing': '2px',
  'border-radius': '8px'
});

const genColor = function() {
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  const fontColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    bgColor,
    fontColor
  };
};

// click event
$('.box1').click(function() {
  const { fontColor } = genColor();
  const textColor = $('.text-box1').text();

  $('.text-box1').css({ color: fontColor });
  $('.text-box1').text(`${textColor.split('-')[0]}-${fontColor}`);
});

// $('.box1').on('mouseover mouseleave', function() {
//   console.log('mouseover and mouseleave');
//   $(this).css({ 'font-style': 'italic' });
// });

$('button').click(function() {
  const randomPrint = setInterval(function() {
    const { bgColor, fontColor } = genColor();
    $('.text-box1').css({ color: bgColor });
    $('.box1').css({ 'background-color': fontColor });
    $('.text-box1').text(`${bgColor}-${fontColor}`);
  }, 100);

  setTimeout(function() {
    clearInterval(randomPrint);
  }, 2000);
});

// hover events, mouseenter and mouseleave
$('.box1').hover(
  function(e) {
    $(this).css({
      'font-style': 'italic',
      'font-size': '4em',
      'letter-spacing': '10px'
    });
  },
  function() {
    $(this).css({
      'font-style': 'normal',
      'font-size': '3.25em',
      'letter-spacing': '2px',
      'background-color': 'brown',
      color: 'aliceblue'
    });
    const { bgColor, fontColor } = genColor();

    $('.text-box1').css({ color: fontColor });
    $(this).css({ 'background-color': bgColor });
    $('.text-box1').text(`${bgColor}-${fontColor}`);
  }
);

// $('.box1').mousemove(function() {
//   const rand = Math.floor(Math.random() * colors.length);
//   console.log(rand);
//   $('.text-box1').css({ color: colors[rand] });
// });
