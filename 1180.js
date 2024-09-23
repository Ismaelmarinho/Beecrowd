var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = Number(lines[0])
var valores = lines[1].split(' ').map(Number);
var menor = 1001
for(var i = 0; i < n; i++){
    var num = valores[i]
    if(num < menor){
        menor = num
    }
}
console.log(`Menor valor: ${menor}`)
var cont = 0
for(var k = 0; k < n; k ++){
    if(menor === valores[k]){
        break
    }else{
        cont++
    }
}
console.log(`Posicao: ${cont}`)
