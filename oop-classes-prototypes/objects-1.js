// niomic
function panggilObjects() {
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih',
    tahun: [2001, 2002, 2003, 2004]
  };

  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.type);
  console.log(mobil.tahun);
  console.log(mobil.tahun[1]);
}

// panggilObjects();

// andaglos
var supermanObj = {
  id: '1a2b3c',
  name: 'Superman',
  age: 200,
  favorites: [
    'coding',
    'reading',
    {
      sports: ['parkour', 'hill climbing']
    }
  ],
  address: {},
  speak: function() {
    console.log('i am superman!');
  }
};

console.log(supermanObj.name); // "Superman"
console.log(supermanObj.age); // 200
console.log(supermanObj.favorites[0]); // "coding"
console.log(supermanObj.favorites[2].sports); // ["parkour", "hill climbing"]
console.log(supermanObj.favorites[2].sports[0]); // "parkour"
supermanObj.speak(); // "i am superman!"
