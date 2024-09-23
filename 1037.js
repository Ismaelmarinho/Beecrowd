var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var i = parseFloat(lines.shift());

if (i >= 0 && i <= 25) {
    console.log('Intervalo [0,25]');
} else if (i > 25 && i <= 50) { 
    console.log('Intervalo (25,50]');
} else if (i > 50 && i <= 75) { 
    console.log('Intervalo (50,75]');
} else if (i > 75 && i <= 100) { 
    console.log('Intervalo (75,100]');
}else { 
    console.log('Fora de intervalo');
}