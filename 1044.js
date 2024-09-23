var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift().split(" ");
var b = parseInt(a[0]);
var c = parseInt(a[1]);

if (b % c == 0 || c % b == 0) 
    console.log('Sao Multiplos');
else 
    console.log('Nao sao Multiplos');