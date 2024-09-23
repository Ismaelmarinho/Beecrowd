var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = [0, 1]

for(var i = 0; i < 60 - 1; i++){
    soma = a[i] + a[i+1]
    a.push(soma)
}

for(var k = 1; k <= lines[0]; k++){
console.log(`Fib(${lines[k]}) = ${a[lines[k]]}`)
}

