function balikKata(kata) {
  return kata
    .split('')
    .reverse()
    .join('');
}

function balikKataFor(kata) {
  var balikKata = '';

  for (let i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
  }

  return balikKata;
}

function balikKataWhile(kata) {
  var balikKata = '';
  var i = kata.length - 1;

  while (i >= 0) {
    balikKata += kata[i];
    i--;
  }

  return balikKata;
}

// testCase
// console.log(balikKata("Niomic!"));
// console.log(balikKata("JavaScript"));
// console.log(balikKata("alohahola"));
// console.log(balikKata("Jawa_Barat"));

// console.log(balikKataFor("Niomic!"));
// console.log(balikKataFor("JavaScript"));
// console.log(balikKataFor("alohahola"));
// console.log(balikKataFor("Jawa_Barat"));

// console.log(balikKataWhile("Niomic!"));
// console.log(balikKataWhile("JavaScript"));
// console.log(balikKataWhile("alohahola"));
// console.log(balikKataWhile("Jawa_Barat"));
