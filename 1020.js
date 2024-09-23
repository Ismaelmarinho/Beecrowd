var input = require('fs').readFileSync('stdin', 'utf8');
let a = parseInt(input);
let b, ItaloMeses;
b = parseInt(a / 365); 
a = a % 365;
ItaloMeses = parseInt(a / 30); 
a = a % 30;
let resultado = `${b} ano(s)
${ItaloMeses} mes(es)
${a} dia(s)`;
console.log(resultado);