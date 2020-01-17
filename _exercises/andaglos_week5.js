/* jshint esversion: 6 */

// ----------------------------------------
// 1. Exercise Faktorial Rekursif
// ----------------------------------------
function faktorialRekursif(angka) {
	return angka === 1 ? 1 : angka * faktorialRekursif(angka - 1);
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 1. Exercise Faktorial Rekursif");
console.log("// ----------------------------------------");
console.log(faktorialRekursif(3)); // 6
console.log(faktorialRekursif(4)); // 24
console.log(faktorialRekursif(5)); // 120
console.log(faktorialRekursif(2)); // 2
console.log(faktorialRekursif(1)); // 1
console.log("\n");

// ----------------------------------------
// 2. Exercise Total Digit Rekursif
// ----------------------------------------
function totalDigitRekursif(angka) {
	return angka.toString().length < 1
		? 0
		: Number(angka.toString()[0]) +
				totalDigitRekursif(angka.toString().slice(1, angka.toString().length));
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 2. Exercise Total Digit Rekursif");
console.log("// ----------------------------------------");
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log("\n");

// ----------------------------------------
// 3. Exercise Kali Terus Rekursif
// ----------------------------------------
function kaliTerusRekursif(angka) {
	if (angka.toString().length === 1) {
		return angka;
	} else {
		let ix = function(x) {
			return x.toString().length < 1
				? 1
				: Number(x.toString()[0]) *
						ix(x.toString().slice(1, x.toString().length));
		};
		return kaliTerusRekursif(ix(angka));
	}
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 3. Exercise Kali Terus Rekursif");
console.log("// ----------------------------------------");
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log("\n");

// ----------------------------------------
// 4. Exercise Hapus Simbol (Regex)
// ----------------------------------------
function hapusSimbol(str) {
	return str.replace(/[%\$@\s+#!~\+\*\=\-]/g, "");
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 4. Exercise Hapus Simbol (Regex)");
console.log("// ----------------------------------------");
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
console.log("\n");

// ----------------------------------------
// 5. Exercise Cari Pelaku (Regex)
// ----------------------------------------
function cariPelaku(str) {
	return str.split(/abc/).length - 1;
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 5. Exercise Cari Pelaku (Regex)");
console.log("// ----------------------------------------");
console.log(cariPelaku("mabcvabc")); // 2
console.log(cariPelaku("abcdabdc")); // 1
console.log(cariPelaku("bcabcac")); // 1
console.log(cariPelaku("abcabcabc")); // 3
console.log(cariPelaku("babcbacabc")); // 2
console.log("\n");

// ----------------------------------------
// 6. Exercise Membuat Class ES6 Sederhana
// ----------------------------------------
class Mobil {
	constructor(merek, harga, warna, bensin, jumlahRoda) {
		this.merek = merek;
		this.harga = harga;
		this.warna = warna;
		this.bensin = bensin;
		this.jumlahRoda = jumlahRoda;
	}

	// Setter
	setMerek(value) {
		this.merek = value;
	}
	setHarga(value) {
		this.harga = value;
	}
	setWarna(value) {
		this.warna = value;
	}
	setBensin(value) {
		this.bensin = value;
	}
	setJumlahRoda(value) {
		this.jumlahRoda = value;
	}

	// Getter
	getMerek() {
		return this.merek;
	}
	getHarga() {
		return this.harga;
	}
	getWarna() {
		return this.warna;
	}
	getBensin() {
		return this.bensin;
	}
	getJumlahRoda() {
		return this.jumlahRoda;
	}

	tampilkanSpesifikasi() {
		console.log(
			"Mobil saya bermerek " +
				this.getMerek() +
				" dengan harga " +
				this.getHarga() +
				" rupiah, berwarna " +
				this.getWarna() +
				", bensinnya " +
				this.getBensin() +
				", dan beroda " +
				this.getJumlahRoda() +
				"."
		);
	}

	jualMobil() {
		const discount = 0.2;
		let hargaMobil = this.getHarga() - this.getHarga() * discount;
		console.log("Harga mobil adalah " + hargaMobil.toString());
	}
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 6. Exercise Membuat Class ES6 Sederhana");
console.log("// ----------------------------------------");
let mobil = new Mobil("Hando", 300000000, "merah", "solar", "4");
mobil.tampilkanSpesifikasi(); // menampilkan spesifikasi
mobil.jualMobil();
console.log("\n");

// ----------------------------------------
// 7. Exercise Membuat Class ES6 Lanjutan
// ----------------------------------------
class Student {
	constructor(name, age, dateOfBirth, gender, id) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.id = id;
		this.hobbies = [];
	}

	// Setter
	setName(value) {
		this.name = value;
	}
	setAge(value) {
		this.age = value;
	}
	setDateOfBirth(value) {
		this.dateOfBirth = value;
	}
	setGender(value) {
		let arr = ["Male", "Female"];

		if (arr.includes(value)) {
			this.gender = value;
		} else {
			this.gender = "Male";
			console.log(
				'* Input salah, hanya menerima Male atau Female, set to default as "Male"\n'
			);
		}
	}
	setId(value) {
		this.id = value;
	}
	addHobby(value) {
		this.hobbies.push(value);
	}
	removeHobby(value) {
		this.hobbies.splice(this.hobbies.indexOf(value), 1);
	}

	// Getter
	getName() {
		return this.name;
	}
	getAge() {
		return this.age;
	}
	getDateOfBirth() {
		return this.dateOfBirth;
	}
	getGender() {
		return this.gender;
	}
	getId() {
		return this.id;
	}
	getHobbies() {
		return this.hobbies.join(", ");
	}
	getData() {
		let data = "";

		data += "Name: " + this.getName() + "\n";
		data += "Age: " + this.getAge() + "\n";
		data += "Date Of Birth: " + this.getDateOfBirth() + "\n";
		data += "Gender: " + this.getGender() + "\n";
		data += "Student Id: " + this.getId() + "\n";
		data += "Hobbies: " + this.getHobbies() + "\n";

		return data;
	}
}

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 7. Exercise Membuat Class ES6 Lanjutan");
console.log("// ----------------------------------------");

let student = new Student("Julia", 30, "31-08-1988", "Male", "ID001");
console.log(student.getData());

student.setName("Juliawati"); // SetName
student.setAge(34); // SetAge
student.setDateOfBirth("31-08-1984"); // SetDateOfBirth
student.setGender("Abuabu"); // SetGender
student.setGender("Female");
student.addHobby("Memasak");
student.addHobby("Melukis");
student.addHobby("Menjahit");
student.addHobby("Sepakbola");
student.removeHobby("Sepakbola");
console.log(student.getData());
console.log("\n");

// ----------------------------------------
// 8. Exercise Membuat Object Literal
// ----------------------------------------
var studentObj = {
	name: "Juliawati",
	age: 34,
	dateOfBirth: "31-08-1984",
	gender: "Female",
	id: "ID001",
	hobbies: ["Memasak", "Melukis", "Menjahit"],
	getData: function() {
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Date of Birth: " + this.dateOfBirth);
		console.log("Gender: " + this.gender);
		console.log("Student Id: " + this.id);
		console.log("Hobbies: " + this.hobbies.join(", ") + "\n");
	}
};

// TEST CASES
console.log("// ----------------------------------------");
console.log("// 8. Exercise Membuat Object Literal");
console.log("// ----------------------------------------");
console.log(studentObj);
console.log("\n");
console.log(studentObj.name);
console.log("\n");
studentObj.getData();
console.log("\n");
console.log(studentObj.hobbies[0]);
console.log(studentObj.hobbies[1]);
console.log(studentObj.hobbies[2]);
