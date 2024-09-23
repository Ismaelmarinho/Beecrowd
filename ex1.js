var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('/n')
var palavra = lines[0]
var nome= ''
for (let i = 0; i< palavra.length; i++) {
    var letra = palavra[i]
    if (letra === letra.toUpperCase()) {
        letra = letra.toLowerCase()
        nome += letra
    } else{
        letra = letra.toUpperCase()
        nome += letra
    }
}