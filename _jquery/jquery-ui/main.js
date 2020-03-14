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

// accordion
$('#accordion').accordion({
  active: 1,
  // animate: 200,
  collapsible: true,
  event: 'mouseover'
});

// datepicker
const datePicker = $('#datepicker');
datePicker.datepicker({
  minDate: 0,
  maxDate: 10
});

datePicker.change(function(e) {
  console.log($(this).val());
});

// autocomplete
const list = ['Endang', 'Indah', 'Alde', 'Aqeela', 'Auza', 'Arsyila'];
$('#tags').autocomplete({
  source: list,
  minLength: 3
});

// slider
$('#slider').slider({
  min: 10,
  max: 500,
  step: 5,
  range: true,
  change: function(event, ui) {
    console.log(ui.values[0]);
    console.log(ui.values[1]);
  }
});
