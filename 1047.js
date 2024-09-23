var input = require('fs').readFileSync('stdin', 'utf8')
var line = input.split(' ').map(Number)
var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);
var t = parseInt(line[3]);
var to = (t-b);
var to1 = (c-a);
if (to < 0) 
{
    to += 60;
    to1--;
}
if (to1 < 0) 
{
    to1+=24;
}
if (a == c && b == t) console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else console.log('O JOGO DUROU '+ to1 + ' HORA(S) E ' + to + ' MINUTO(S)');