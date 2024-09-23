var input = require('fs').readFileSync('stdin', 'utf8');
var valor  = input.split('\n')
console.log('NOTAS:')
let nota100 = parseInt(valor / 100)
console.log(`${nota100} nota(s) de R$ 100.00`)
valor = valor % 100
let nota50 = parseInt(valor / 50)
console.log(`${nota50} nota(s) de R$ 50.00`)
valor = valor % 50
let nota20 = parseInt(valor / 20)
console.log(`${nota20} nota(s) de R$ 20.00`)
valor = valor % 20
let nota10 = parseInt(valor / 10)
console.log(`${nota10} nota(s) de R$ 10.00`)
valor = valor % 10
let nota5 = parseInt(valor / 5)
console.log(`${nota5} nota(s) de R$ 10.00`)
valor = valor % 5
let nota2 = parseInt(valor / 2)
console.log(`${nota2} nota(s) de R$ 20.00`)
valor = valor % 2

console.log(`MOEDAS:`)
let moeda1 = valor / 1
console.log(`${Math.floor(moeda1)} moeda(s) de R$ 1.00`)
valor = valor % 1
let moeda50 = valor / 0.50
console.log(`${Math.floor(moeda50)} moeda(s) de R$ 0.50`)
valor = valor % 0.50
let moeda25 = valor / 0.25
console.log(`${Math.floor(moeda25)} moeda(s) de R$ 0.25`)
valor = valor % 0.25
let moeda10 = valor / 0.10
console.log(`${Math.floor(moeda10)} moeda(s) de R$ 0.10`)
valor = valor % 0.10
let moeda5 = valor / 0.05
console.log(`${Math.floor(moeda5)} moeda(s) de R$ 0.05`)
valor = valor % 0.05
let moeda11 = valor / 0.01
console.log(`${Math.floor(moeda11)} moeda(s) de R$ 0.01`)
valor = valor % 0.01


