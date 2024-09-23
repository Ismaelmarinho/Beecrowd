var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
let segundo = parseInt (input)
var hora = parseInt(segundo / 3600)
segundo = segundo % 3600
var minuto = parseInt(segundo / 60 )
segundo = segundo % 60
console.log(`${hora}:${minuto}:${segundo}`)