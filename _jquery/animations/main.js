// Coding Revolution
// 2/7/2020

$('.container').hover(
  function() {
    $(this)
      .stop()
      .animate(
        {
          left: '100px'
        },
        'slow'
      );
  },
  function() {
    $(this)
      .stop()
      .animate(
        {
          left: '0px'
        },
        'slow'
      );
  }
);

$('.square.one')
  .delay(300)
  .animate(
    {
      marginLeft: '+=400px'
    },
    2000
  );
$('.square.two')
  .delay(500)
  .animate(
    {
      marginLeft: '+=400px'
    },
    2000
  );
$('.square.three')
  .delay(600)
  .animate(
    {
      marginLeft: '+=400px'
    },
    2000
  );
