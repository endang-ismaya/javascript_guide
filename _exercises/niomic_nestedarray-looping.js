/* jshint esversion: 6 */


function panggilNestedArray(value) {

    value.forEach(element => {
        console.log('id : ' + element[0]);
        console.log('name : ' + element[1]);
        console.log('company : ' + element[2]);
        console.log('\n');
    });

}

var nestedArray = [
    [1, "Mark Zuckerberg", "Facebook"],
    [2, "Elon Musk", "Tesla"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Steve Jobs", "Apple"]
];

// panggilNestedArray(nestedArray)


//

function panggilNestedArray(value) {

    var a = [], b = [], c = [], d = [];

    value.map(function(x) {
        a.push(x[0]);
        b.push(x[1]);
        c.push(x[2]);
        d.push(x[3]);
    });

    var newVar = [a, b, c, d];

    console.log(newVar);
}

var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

panggilNestedArray(nestedArray);