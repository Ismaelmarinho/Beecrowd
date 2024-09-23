var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
let n = parseInt(lines.shift());
let a = [];
let te;

for(let i = 0;i <= 19; i++){
  a.push(n);
  n = parseInt(lines.shift());
}

for(let i = 0, j = 19; i < 10; i++ ,j--){
  te = a[i];
  a[i] = a[j];
  a[j] = te;
}

for(let i = 0;i < a.length; i++){
  console.log(`N[${i}] = ${a[i]}`);
}