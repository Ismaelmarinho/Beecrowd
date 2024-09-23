var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
var co = parseInt(lines.shift());
var o = lines.shift();
var soma = 0;

let resultado = 0;

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const n = parseInt(lines.shift());
    if (j === co) soma += n;
  }
}

if (o === 'S') {
  resultado = soma;
} else {
  resultado = soma / 12;
}

console.log(resultado.toFixed(1));