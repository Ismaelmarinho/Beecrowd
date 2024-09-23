var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lines = lines.shift().split(" ");
var i = parseFloat(lines[0]);
var t = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
var m;
var s;
var tritalo;

if (i > t && i > c) m = i;
else if (t > c) m = t;
else m = c;

if (m == i) s = t + c;
else if (m == t) s = i + c;
else s = t + i;

if (s > m) tritalo = true;
else tritalo = false;

if (tritalo) {
    var peritalo = i + t + c;
    console.log('Perimetro = ' + peritalo.toFixed(1));
} else {
    var areaItalo = ((i + t) * c) / 2;
    console.log('Area = ' + areaItalo.toFixed(1));
}