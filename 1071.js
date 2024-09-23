var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split('\n').map(Number);
if (x > y){
    [x,y] = [y + 1, x]
} else{
    x++
}
var l= 0
for (var i = x; i < y; i++){
    if (i % 2 != 0){
        l += i
    }
}
console.log(l)