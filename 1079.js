var input = require('fs').readFileSync('stdin', 'utf8'); 
var lines = input.split('\n');

l = parseInt(lines.shift())

for (i = 0; i < l; i++) {

        var [a,b,c] = lines[i].split(" ");

        media = ((a*2) + (b*3) + (c*5)) / 10;

        console.log(media.toFixed(1));

    }