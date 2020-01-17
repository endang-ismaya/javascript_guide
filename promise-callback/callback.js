// Andaglos
const pertambahan = (angka1, angka2, displayResult) => {
  const hasil = angka1 + angka2;
  displayResult(hasil);
};

const display = hasil => console.log(hasil);

// TEST CASES
pertambahan(3, 4, display);
