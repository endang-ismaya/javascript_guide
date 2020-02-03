// Coding Revolution
// 2/3/2020

$('hr').css({ margin: '5px 0px 30px 0px' });

// append
$('.container').append(`<div class="div-0">My new div-0 from jQuery</div>`);

// appendTo
$(`<div class="div-1">My new div-1 from jQuery</div>`).appendTo($('.div-0'));

// prepend
$('.container').prepend(`<div>Beginning of div by prepend</div>`);

// after
$('.container').after(`<div>last of div by after</div>`);

// css for div
$('div')
  .not('[ class *= container]')
  .css({ padding: '15px', border: 'solid 1px black' });

// replace
$(`<div>Its already replaced by Jquery!</div>`).replaceAll($('.replace-1'));

// remove
$('.replace-2 p').remove();
