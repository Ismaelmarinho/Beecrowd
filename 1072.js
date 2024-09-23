var input = require('fs').readFileSync('stdin', 'utf8');


var num = input.split('\n').map(Number)
var d = 0
var f = 0
var t = num.length

for(var i = 1; i <= num[0]; i++){
    if(num[i] >= 10 && num[i] <= 20){
        d++
    } else if( num[i] < 10 || num[i] > 20 && num[i] != 0){
        f++
    }
} 
console.log(`${d} in`)
console.log(`${f} out`)

