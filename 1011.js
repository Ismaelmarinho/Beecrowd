var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var a = parseFloat(lines)
var pi = 3.14159
var r = (4/3.0) * pi * Math.pow(a,3)
console.log("VOLUME = " + r.toFixed(3))