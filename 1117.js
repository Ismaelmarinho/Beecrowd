var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s = 0
var q = 0

for(var i = 0; i <= lines.length; i++){
    var notas = Number(lines[i])
    if( notas < 0 || notas > 10){
        console.log("nota invalida")
    } 
}

for(var n = 0; n <= lines.length && q <= 1; n++){
    var nota = Number(lines[n])
    if( nota >= 0 && nota <= 10){
        s += nota
        q++
    } 
}
console.log(`media = ${media(s)}`)

function media(n){
    return n / 2
}
