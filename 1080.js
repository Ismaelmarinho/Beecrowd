var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n').map(Number)
var m = 0
var p = 0
for(var i = 0; i <= valores.length; i++){
    if(valores[i] > m){
        m = valores[i]
        p = i+1
    } 
}
console.log(m)
console.log(p)

