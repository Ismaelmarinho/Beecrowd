var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var [a]= input.split()
var v = parseFloat(a)
let c = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let b = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    b = parseInt(v / c[i])
    console.log(`${b} nota(s) de R$ ${c[i].toFixed(2)}`)
    v = v % c[i]
}
console.log("MOEDAS:")
for (let j = 6; j < c.length; j++) {
    b = parseInt(v / c[j])
    console.log(`${b} moeda(s) de R$ ${c[j].toFixed(2)}`)
    v = v % c[j] + 0.00001
}