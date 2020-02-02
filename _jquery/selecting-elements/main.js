// Coding Revolution
// 2/2/2020

// selecting all element
// console.log($('p'));

// selecting multiple element
$('ul,p,form').css('font-size', '30px');

// selecting with class
$('.text').css('color', 'green');

// selecting input with text
$("input[type='email']").css('background-color', 'yellow');
$('input:text').css({ 'background-color': 'black', color: 'white' });

// selecting input radio that checked
$('input:checked').css('margin', '20px');

// selecting the first li
$('.element-abc li:odd').css({ 'background-color': 'yellow' });
$('.element-abc li:even').css({ 'background-color': 'green' });
$('.element-abc li:first').css({ 'background-color': 'red' });
$('.element-abc li:last').css({ 'background-color': 'pink' });

// selecting table
$('table tr:odd').css({ 'background-color': 'pink' });
$('table tr:even').css({ 'background-color': 'yellow' });
$('table tr:first').css({ 'background-color': 'black', color: 'white' });
$('table').attr({ border: '1', cellspacing: '0', cellpadding: '5' });

$('table th.no').css({ width: '10px' });
$('table th.name').css({ width: '200px' });
$('table th.address').css({ width: '400px' });

// selecting children
$('.list li:first-child').css({ 'background-color': 'gray' });
$('.list li:first-of-type').css({ 'background-color': 'gray' });
$('.list li:last-of-type').css({ 'background-color': 'pink' });
$('.list li:nth-child(2)').css({
  'background-color': 'teal',
  color: 'whitesmoke'
});
$('.list li:nth-last-child(2)').css({
  'background-color': 'silver',
  color: 'whitesmoke'
});

// selecting with find
$('.parent')
  .find('div')
  .css({ 'background-color': 'olive' });

// selecting with children
$('.parent')
  .children('#other')
  .css({
    'font-size': '1.2em',
    'font-family': 'nunito',
    'font-style': 'italic',
    color: 'fuchsia'
  });
