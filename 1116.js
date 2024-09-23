var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let a, b, x, y;
a = input.split("\n");
s = a.shift();
for (i = 0; i < s; i++){
    b = a.shift().split(" ");

    x = parseInt(b[0]);
    y = parseInt(b[1]);

    if (isFinite(x / y) === false ){
        (console.log("divisao impossivel"));
    }
    else{
        console.log(parseFloat(x / y).toFixed(1));
    }
}