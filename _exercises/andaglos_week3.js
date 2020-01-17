/*
 * Endang.Ismaya
 * Exercise Week-3
 * 11/23/2018
 */

// ---------------------------
// Exercise Bandingkan Angka
// ---------------------------
function bandingkanAngka(angka1, angka2) {
  if (angka1 === angka2) {
    return -1;
  }
  return angka2 > angka1;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 1. Exercise Bandingkan Angka');
console.log('// ------------------------------');
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
console.log('\n');

// ---------------------------
// Exercise Balik Kata
// ---------------------------
function balikKata(kata) {
  var kataTerbalik = '';
  for (let i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
  }
  return kataTerbalik;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 2. Exercise Balik Kata');
console.log('// ------------------------------');
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log('\n');

// ---------------------------
// Exercise Konversi Menit
// ---------------------------
function konversiMenit(menit) {
  var h = Math.floor(menit / 60);
  var minute = Math.floor(menit % 60);
  var mm = String(minute).padStart(2, '0');

  return h + ':' + mm;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 3. Exercise Konversi Menit');
console.log('// ------------------------------');
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log('\n');

// ---------------------------
// Exercise Perpangkatan Dua
// ---------------------------
function perpangkatanDua(str) {
  var i = 0;
  while (true) {
    const iPow = Math.pow(2, i);

    if (str === iPow) {
      return i;
    }

    if (iPow >= str) {
      return -1;
    }
    i++;
  }
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 4. Exercise Perpangkatan Dua');
console.log('// ------------------------------');
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
// console.log(perpangkatanDua(512)); // 9
console.log('\n');

// ---------------------------
// Exercise X dan O
// ---------------------------
function xo(str) {
  const o = str.split('o').length - 1;
  const x = str.split('x').length - 1;

  // console.log(o + ' / ' + x);

  if (o === x) {
    return true;
  }
  return false;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 5. Exercise X dan O');
console.log('// ------------------------------');
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('abababababa')); // true
console.log('\n');

// ---------------------------
// Exercise Palindrome
// ---------------------------
function palindrome(kata) {
  let atak = '';
  for (let i = kata.length - 1; i >= 0; i--) {
    atak += kata[i];
  }

  return kata === atak;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 6. Exercise Palindrome');
console.log('// ------------------------------');
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log('\n');

// ---------------------------
// Exercise Hitung Jumlah Kata
// ---------------------------
function hitungJumlahKata(kalimat) {
  const iKata = kalimat.split(' ').length;
  return iKata;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 7. Exercise Hitung Jumlah Kata');
console.log('// ------------------------------');
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log('\n');

// ---------------------------
// Exercise Perkalian Unik
// ---------------------------
function perkalianUnik(arr) {
  var arrUnik = [];

  for (let i = 0; i < arr.length; i++) {
    const iValue = arr[i];
    let iResult = 1;

    for (let j = 0; j < arr.length; j++) {
      const jValue = arr[j];

      if (i !== j) {
        iResult *= jValue;
      }
    }

    arrUnik.push(iResult);
  }

  return arrUnik;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 8. Exercise Perkalian Unik');
console.log('// ------------------------------');
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
console.log('\n');

// ----------------------------------
//  Exercise Pasangan Angka terbesar
// ----------------------------------
function pasanganTerbesar(num) {
  var arrMax = [];
  var numString = String(num);
  for (let i = 0; i < numString.length; i++) {
    let digit1 = numString[i];
    let digit2 = 0;

    if (i + 1 !== numString.length) {
      digit2 = numString[i + 1];
    } else {
      break;
    }

    let digit12 = digit1 + digit2;
    // console.log(digit1_2);

    arrMax.push(Number(digit12));
  }

  // console.log(arrMax);

  return Math.max(...arrMax);
}

// TEST CASES
console.log('// -----------------------------------');
console.log('// 9. Exercise Pasangan Angka terbesar');
console.log('// -----------------------------------');
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log('\n');

// ----------------------------------
// Exercise Palindrome Angka
// ----------------------------------
function angkaPalindrome(num) {
  while (true) {
    num++;

    let mun = '';
    let numString = String(num);
    for (let i = numString.length - 1; i >= 0; i--) {
      mun += numString[i];
    }

    if (mun === numString) {
      return numString;
    }
  }
}

// TEST CASES
console.log('// -----------------------------------');
console.log('// 10.Exercise Palindrome Angka');
console.log('// -----------------------------------');
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log('\n');

// ----------------------------------
// Exercise Deret Aritmatika
// ----------------------------------
function tentukanDeretAritmatika(arr) {
  let iSelisih = 0;
  // console.log(arr.length);

  // cek jika arr.length > 2
  // ambil selisih dari nilai ke-2 dan ke-1 (array 1 & array 0)
  if (arr.length > 2) {
    iSelisih = arr[1] - arr[0];
  } else {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const digit1 = arr[i];
    let digit2 = 0;

    if (i + 1 !== arr.length) {
      digit2 = arr[i + 1];
    } else {
      break;
    }

    if (digit2 - digit1 === iSelisih) {
      continue;
    }
    return false;
  }

  return true;
}

// TEST CASES
console.log('// -----------------------------------');
console.log('// 11.Exercise Deret Aritmatika');
console.log('// -----------------------------------');
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log('\n');

// ----------------------------------
// Exercise Deret Geometri
// ----------------------------------
function tentukanDeretGeometri(arr) {
  let iSelisih = 0;
  // console.log(arr.length);

  // cek jika arr.length > 2
  // ambil selisih dari nilai ke-2 dan ke-1 (array 1 & array 0)
  if (arr.length > 2) {
    iSelisih = arr[1] / arr[0];
  } else {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const digit1 = arr[i];
    let digit2 = 0;

    if (i + 1 !== arr.length) {
      digit2 = arr[i + 1];
    } else {
      break;
    }

    if (digit2 / digit1 === iSelisih) {
      continue;
    }
    return false;
  }

  return true;
}

// TEST CASES
console.log('// -----------------------------------');
console.log('// 12.Exercise Deret Geometri');
console.log('// -----------------------------------');
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log('\n');

// ----------------------------------
// Exercise Target Terdekat
// ----------------------------------
function targetTerdekat(arr) {
  var jarakTerdekat = [];
  var x = false;
  var o = false;
  var iX = 0;
  var iO = 0;

  for (let i = 0; i < arr.length; i++) {
    let karakter = arr[i];

    if (karakter === 'o') {
      if (o) {
        iO = i;
      } else {
        o = true;
        iO = i;
      }
    } else if (karakter === 'x') {
      if (x) {
        iX = i;
      } else {
        x = true;
        iX = i;
      }
    }

    if (x && o) {
      var iJarak = Math.abs(iX - iO);
      jarakTerdekat.push(iJarak);
      // reset value
      iO = 0;
      iX = 0;
      x = false;
      o = false;
      i -= 1;
    }
  }

  if (jarakTerdekat.length > 0) {
    return Math.min(...jarakTerdekat);
  }
  return 0;
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 13. Exercise Target Terdekat');
console.log('// ------------------------------');
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
console.log(targetTerdekat(['x', '', 'o', '', '', 'x'])); // 2
console.log(targetTerdekat(['x', '', '', 'o', '', 'x'])); // 2
console.log('\n');
