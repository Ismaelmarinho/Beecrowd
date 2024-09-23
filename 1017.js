var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b] = input.split("\n"); 
var s = a * b; 
var g = s / 12; 

console.log(g.toFixed(3));