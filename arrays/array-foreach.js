// Niomic
function panggilForEach() {
  var data = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];

  data.forEach(function(item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilForEach();
