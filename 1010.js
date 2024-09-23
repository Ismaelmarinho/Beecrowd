var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('/n')
var [a, b, v] = lines.shift().split(" ");
var [a1, c1, v1] = lines.shift().split(" ");
var va = b * v;
var va1 = c1 * v1;

var valorTotalCompra = va + va1;
console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));