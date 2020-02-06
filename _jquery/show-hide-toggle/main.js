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

const genColor = function() {
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  const fontColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    bgColor,
    fontColor
  };
};

$('.parent').css({
  display: 'flex',
  'justify-content': 'center'
});

$('.container').css({
  'margin-top': '20px',
  width: '300px',
  height: '320px',
  'background-color': 'skyblue'
});

$('.button-parent').css({
  position: 'fixed',
  top: '70%'
});

$('.button-parent-1').css({
  position: 'fixed',
  top: '80%'
});

$('button').css({
  'box-shadow': 'inset 0px 1px 0px 0px #97c4fe',
  background: 'linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)',
  'background-color': '#3d94f6',
  'border-radius': '6px',
  border: '1px solid #337fed',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#ffffff',
  'font-family': 'Arial',
  'font-size': '15px',
  'font-weight': 'bold',
  padding: '6px 24px',
  'text-decoration': 'none',
  'text-shadow': '0px 1px 0px #1570cd',
  'margin-top': '15px',
  'margin-right': '15px'
});
$('button').hover(function() {
  $(this).css({
    background: 'linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%)',
    'background-color': '#1e62d0'
  });
});

// show and hide
$('.hide').click(function() {
  $('.container').hide(2000, function() {
    console.log(`container is hiding!`);
  });
});

$('.show').click(function() {
  $('.container').show(2000, function() {
    console.log(`container is show`);
  });
});

// with toggle
$('.toggle').click(function() {
  $('.container').toggle('slow', function() {
    console.log(`toggling...`);
  });
});

// fade in-out
// $('.fade-in').click(function() {
//   $('.container').fadeIn(2000, function() {
//     console.log(`container is hiding with fade-in effect!`);
//   });
// });

// $('.fade-out').click(function() {
//   $('.container').fadeOut(2000, function() {
//     console.log(`container is hiding with fade-out effect!`);
//   });
// });

$('.fade-in, .fade-out').click(function() {
  $('.container').fadeToggle('slow', function() {
    console.log(`toggling...`);
  });
});

// slide
// $('.slide-up').click(function() {
//   $('.container').slideUp('slow', function() {
//     console.log(`sliding up...`);
//   });
// });

// $('.slide-down').click(function() {
//   $('.container').slideDown('slow', function() {
//     console.log(`sliding down...`);
//   });
// });

$('.slide-up, .slide-down').click(function() {
  $('.container').slideToggle('slow', function() {
    console.log(`toggling...`);
  });
});

// animate
$('.animate').click(function() {
  const { bgColor } = genColor();
  const left = Math.floor(Math.random() * 800) + 1;
  const top = Math.floor(Math.random() * 200) + 1;

  $('.container').css({
    position: 'absolute',
    backgroundColor: bgColor,
    transition: 'background-color .5s ease-in-out'
  });
  $('.container').animate(
    {
      left: `${left}px`,
      top: `${top}px`
    },
    1500
  );

  $('.container').text(`animate: ${bgColor} ${left}px ${top}px`);
});
