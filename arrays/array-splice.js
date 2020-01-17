function panggilSplice() {
  var kota = ['jakarta', 'bandung', 'malang', 'surabaya', 'makasar'];

  console.log(kota);
  kota.splice(2, 0, 'palembang'); // menyisipkan 'palembang' di array ke-2
  console.log(kota); //['jakarta', 'bandung', 'palembang', 'malang', 'surabaya', 'makasar'];
  kota.splice(3, 1, 'tangerang'); // menyisipkan 'tangerang' di array ke-3 dan menghapus array ke-3 sebelumnya (malang)
  console.log(kota);
}

panggilSplice();
