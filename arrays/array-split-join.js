function panggilSplitJoin() {
  var kalimat = 'Kita sedang belajar JS';
  console.log(kalimat);

  var arrKalimat = kalimat.split(' ');
  console.log(arrKalimat);

  var joinKalimat = arrKalimat.join('-');
  return joinKalimat;
}

console.log(panggilSplitJoin());
