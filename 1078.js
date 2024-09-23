var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
    
var a = parseInt(lines.shift());
console.log('1 x ' + a + ' = ' + (a * 1));
console.log('2 x ' + a + ' = ' + (a * 2));
console.log('3 x ' + a + ' = ' + (a * 3));
console.log('4 x ' + a + ' = ' + (a * 4));
console.log('5 x ' + a + ' = ' + (a * 5));
console.log('6 x ' + a + ' = ' + (a * 6));
console.log('7 x ' + a + ' = ' + (a * 7));
console.log('8 x ' + a + ' = ' + (a * 8));
console.log('9 x ' + a + ' = ' + (a * 9));
console.log('10 x ' + a + ' = ' + (a * 10));


