var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
var valor = parseInt(input)
console.log(valor)
let nota = parseInt(valor / 100)
console.log(`${nota} nota(s) de R$ ${100},00`)
valor = valor % 100

nota = parseInt(valor / 50)
console.log(`${nota} nota(s) de R$ ${50},00`)
valor = valor % 50

nota = parseInt(valor / 20)
console.log(`${nota} nota(s) de R$ ${20},00`)
valor = valor % 20

nota = parseInt(valor / 10)
console.log(`${nota} nota(s) de R$ ${10},00`)
valor = valor % 10

nota = parseInt(valor / 5)
console.log(`${nota} nota(s) de R$ ${5},00`)
valor = valor % 5

nota = parseInt(valor / 2)
console.log(`${nota} nota(s) de R$ ${2},00`)
valor = valor % 2

nota = parseInt(valor / 1)
console.log(`${nota} nota(s) de R$ ${1},00`)
valor = valor % 1