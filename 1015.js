var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
var valor = input.split('\n')
var [a,b] = valor[0].split(' ')
var [c,d] = valor[1].split(' ')
var distancia = Math.sqrt(((c - a) ** 2 + (d - b) ** 2))
console.log(distancia.toFixed(4))