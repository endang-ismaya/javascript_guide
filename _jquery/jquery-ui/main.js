// draggable
$('.draggable').draggable({
  cancel: '.not-this',
  containment: '.parent',
  // grid: [50, 20],
  handle: '.handle',
  opacity: '0.35',
  drag: function(event, ui) {
    console.log(ui.position);
  }
});

// droppable
$('.draggable-2').draggable();
$('.droppable-2').droppable({
  accept: '.draggable-2',
  drop: function(event, ui) {
    console.log(ui.draggable.attr('class'));
    $(this).addClass('accepted');
    // $('.draggable-2').draggable('disable');
  },
  out: function(event, ui) {
    $(this).removeClass('accepted');
  }
});

// resizable
$('.resizable-3').resizable({
  // animate: true,
  // animateDuration: 100
  aspectRatio: true,
  containment: '.block-3',
  // ghost: true
  // grid: [50. 50]
  maxHeight: 150,
  minHeight: 50
});

// selecable
$('#selectable').selectable({
  // filter: '.available',
  selected: function(event, ui) {
    console.log(ui.selected.innerText);
  }
});

// sortable
$('#sortable').sortable();

$('.trigger').click(function() {
  const list = $('#sortable').sortable('toArray');
  console.log(list);
});
