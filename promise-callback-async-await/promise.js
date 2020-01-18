// Andaglos
const pertambahan = (angka1, angka2) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(angka1) || isNaN(angka2)) {
      reject(new Error('Pertambahan tidak boleh dilakukan'));
    } else {
      const hasil = angka1 + angka2;
      resolve(hasil);
    }
  });
};

// TEST CASES
pertambahan(3, 4)
  .then(hasil => {
    console.log(hasil);
  })
  .catch(err => {
    console.log(err);
  });

pertambahan(3, 'angka2')
  .then(hasil => {
    console.log(hasil);
  })
  .catch(err => {
    console.log(err);
  });
