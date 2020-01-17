function panggilUnShift() {
    var data = ['bandung', 'jakarta', 'medan', 'malang'];
    console.log(data);
    data.unshift('surabaya', 'bali');

    return data;
}

console.log(panggilUnShift());
