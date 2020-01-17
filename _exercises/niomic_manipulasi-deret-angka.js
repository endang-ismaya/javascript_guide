/* jshint esversion: 6 */

function deretAngka(n) {

    var result = '';

    for (let index = 1; index <= n; index++) {

        if (index % 3 === 0 && index % 5 === 0) {
            result += 'NIOMIC ';
        }
        else if (index % 3 === 0) {
            result += 'NIO ';
        } else if (index % 5 === 0) {
            result += 'MIC ';
        } else {
            result += index + ' ';
        }
    }

    return result;
}


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))