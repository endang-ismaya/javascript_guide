var dataKota = ['Jakarta', 'Bandung', 'Bogor', 'Bekasi', 'Semarang', 'Tangerang', 'Serang', 'Bali', 'Malang'];

console.log(dataKota);

var kotaAng = dataKota.filter(function(item) {
  return item.indexOf('ang') !== -1;
});

console.log(kotaAng);

var kotaI = dataKota.filter(item => {
  return item.lastIndexOf('i') !== -1;
});

console.log(kotaI);

var namaBenua = [
  { negara: 'Indonesia', benua: 'Asia' },
  { negara: 'Jerman', benua: 'Eropa' },
  { negara: 'Spanyol', benua: 'Eropa' },
  { negara: 'Korea', benua: 'Asia' },
  { negara: 'Portugal', benua: 'Eropa' },
  { negara: 'Amerika Serikat', benua: 'Amerika' }
];

var benuaEropa = namaBenua.filter(function(item) {
  return item.benua === 'Eropa';
});

console.log(benuaEropa);

//
function panggilFilterParameters(value) {
  var arr = [
    { negara: 'Indonesia', benua: 'Asia' },
    { negara: 'Jerman', benua: 'Eropa' },
    { negara: 'Spanyol', benua: 'Eropa' },
    { negara: 'Korea', benua: 'Asia' },
    { negara: 'Portugal', benua: 'Eropa' },
    { negara: 'Amerika Serikat', benua: 'Amerika' }
  ];

  var benuaValue = arr.filter(function(item) {
    return item.benua === value;
  });

  return benuaValue;
}

// test
console.log(panggilFilterParameters('Asia'));
console.log(panggilFilterParameters('Eropa'));
