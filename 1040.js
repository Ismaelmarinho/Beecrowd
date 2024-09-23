var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
input = input.replace('\n',' ');
var lines = input.split(' ');
var i = parseFloat(lines.shift());
var b = parseFloat(lines.shift()); 
var c = parseFloat(lines.shift());
var d = parseFloat(lines.shift()); 
var v, m;
m = (i * 2 + b * 3 + c * 4 + d) / 10;
console.log("Media: " + m.toFixed(1));
if (m >= 7.0){
    console.log("Aluno aprovado.");
}
else if (m >= 5.0)
{
    console.log("Aluno em exame.");
    v = parseFloat(lines.shift()); 
    console.log("Nota do exame: " + v.toFixed(1));
    if (v + m / 2.0 > 5.0){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + ((v + m ) / 2.0).toFixed(1));
}
else{
    console.log("Aluno reprovado.");
}