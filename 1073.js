var input = require('fs').readFileSync('stdin', 'utf8')
var L = input.split('/n').map(Number)
if (L > 5 && L < 2000) {
    for (let i = 1; i <= L; i++) {
    if ( i % 2 == 0){
        console.log(`${i}^2 = ${BigInt(i * i)}`)
    }       
    }
}