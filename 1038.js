var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var a = lines.shift().split(" ");
var c = parseInt(a[0]);
var q = parseInt(a[1]);
var total;

switch (c) {
    case 1: total = q * 4.00; break;
    case 2: total = q * 4.50; break;
    case 3: total = q * 5.00; break;
    case 4: total = q * 2.00; break;
    case 5: total = q * 1.50; break;
    default: total = 0;
}

console.log("Total: R$ " + total.toFixed(2));