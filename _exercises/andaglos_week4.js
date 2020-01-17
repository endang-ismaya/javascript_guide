/* jshint esversion: 6 */

/*
 * Endang.Ismaya
 * Exercise Week-4
 * 11/26/2018
 */

// ---------------------------
// 1. Exercise Angka Prima
// ---------------------------

function angkaPrima(angka) {

    if (angka <= 1) {
        return false;
    } else if (angka === 2) {
        return true;
    } else {
        for (var i = 2; i < angka; i++) {
            if (angka % i === 0) {
                return false;
            }
        }

        return true;
    }
}

// TEST CASES
console.log('// ------------------------------');
console.log('// 1. Exercise Angka Prima');
console.log('// ------------------------------');
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log('\n');

// ----------------------------------------
// 2. Exercise Faktor Persekutuan Terbesar
// ----------------------------------------
function fpb(angka1, angka2) {

    const iMin = (angka1 < angka2) ? angka1 : angka2;
    // console.log(iMin);

    for (let i = iMin; i >= 1; i--) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            return i;
        }
    }
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 2. Exercise Faktor Persekutuan Terbesar');
console.log('// ----------------------------------------');
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log('\n');

// ----------------------------------------
// 3. Exercise Mencari Mean
// ----------------------------------------
function cariMean(arr) {

    var sum = arr.reduce(function (a, b) {
        return a + b;
    });
    return Math.round(sum / arr.length);
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 3. Exercise Mencari Mean');
console.log('// ----------------------------------------');
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
console.log('\n');

// ----------------------------------------
// 4. Exercise Mencari Median
// ----------------------------------------
function cariMedian(arr) {

    var i = Math.ceil(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[i - 1] + arr[i]) / 2;
    } else {
        return arr[i - 1];
    }
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 4. Exercise Mencari Median');
console.log('// ----------------------------------------');
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log('\n');

// ----------------------------------------
// 5. Exercise Mencari Modus
// ----------------------------------------
function cariModus(arr) {

    var arrModus = [];
    var iMixedNumber = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                arrModus.push(arr[i]);
            } else {
                iMixedNumber++;
            }
        }
    }

    return (arrModus.length === 0 || iMixedNumber === 0) ? -1 : arrModus[0];
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 5. Exercise Mencari Modus');
console.log('// ----------------------------------------');
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log('\n');


// ----------------------------------------
// 6. Exercise Digit Perkalian Minimum
// ----------------------------------------
function digitPerkalianMinimum(angka) {

    var iDigitMin = angka * 2;

    for (let i = 1; i <= angka; i++) {
        const angkaPembagian = angka / i;

        if (Number.isInteger(angkaPembagian) && (angkaPembagian >= 1 && angkaPembagian <= angka)) {
            const faktorP = i.toString() + angkaPembagian.toString();

            if (faktorP.length <= iDigitMin) {
                iDigitMin = faktorP.length;
            }
        }
    }

    return iDigitMin;
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 6. Exercise Digit Perkalian Minimum');
console.log('// ----------------------------------------');
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log('\n');


// ----------------------------------------
// 7. Exercise Urutkan Abjad
// ----------------------------------------
function urutkanAbjad(str) {

    return str.split("").sort(function (str1, str2) {
        return str1 > str2;
    }).join('');

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 7. Exercise Urutkan Abjad');
console.log('// ----------------------------------------');
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
console.log('\n');


// ----------------------------------------
// 8. Exercise Tukar Besar Kecil
// ----------------------------------------
function tukarBesarKecil(kalimat) {

    return kalimat.split('').map((str1) => {
        return (str1 === str1.toUpperCase()) ? str1.toLowerCase() : str1.toUpperCase();
    }).join('');

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 8. Exercise Tukar Besar Kecil');
console.log('// ----------------------------------------');
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
console.log('\n');


// ----------------------------------------
// 9. Exercise Check AB
// ----------------------------------------
function checkAB(num) {

    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a' || num[i] === 'b') {
            for (let j = 0; j < num.length; j++) {
                if ((num[i] === 'a' && num[j] === 'b') || (num[i] === 'b' && num[j] === 'a')) {
                    if (Math.abs(i - j) === 4) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 9. Exercise Check AB');
console.log('// ----------------------------------------');
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log('\n');


// ----------------------------------------
// 10. Exercise Tambah Dash / Strip
// ----------------------------------------
function tambahDash(str) {

    var strDash = '';

    for (let i = 0; i < str.length; i++) {

        strDash += str[i];

        if (i + 1 !== str.length) {
            if (Number(str[i] % 2 !== 0 && Number(str[i + 1]) % 2 !== 0)) {
                strDash += '-';
            }
        }
    }

    return strDash;
}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 10. Exercise Tambah Dash / Strip');
console.log('// ----------------------------------------');
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'
console.log('\n');


// ----------------------------------------
// 11. Exercise Ubah Kapital
// ----------------------------------------
function ubahKapital(kalimat) {

    return kalimat.split(' ').map((x) => {
        return x[0].toUpperCase() + x.slice(1);
    }).join(' ');

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 11. Exercise Ubah Kapital');
console.log('// ----------------------------------------');
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun
console.log('\n');


// ----------------------------------------
// 12. Exercise Ubah Huruf
// ----------------------------------------
function ubahHuruf(kata) {

    return kata.split('').map((x) => {
        return String.fromCharCode(x.charCodeAt(0) + 1);
    }).join('');

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 12. Exercise Ubah Huruf');
console.log('// ----------------------------------------');
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log('\n');


// ----------------------------------------
// 13. Exercise Hitung Huruf
// ----------------------------------------
function hitungHuruf(kata) {

    var words = kata.split(' ');
    var iHighest = 0;
    var targetWord = '';

    for (let i = 0; i < words.length; i++) {
        let chars = words[i].split('');
        let usedIndex = [];
        let iCounts = 0;

        for (let j = 0; j < chars.length; j++) {
            for (let k = 0; k < chars.length; k++) {
                if (j !== k && chars[j] === chars[k] && !usedIndex.includes(k)) {
                    iCounts++;
                    usedIndex.push(k);
                }
            }
        }

        if (iCounts > iHighest) {
            iHighest = iCounts;
            targetWord = words[i];
        }
    }

    return targetWord;

}

// TEST CASES
console.log('// ----------------------------------------');
console.log('// 13. Exercise Hitung Huruf');
console.log('// ----------------------------------------');
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log('\n');