var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
let n = parseFloat(lines.shift());
let cont = 0;
let a = 0;
for(let i = 0; i < 6; i++){
  if(n > 0){
    cont++;
    a += n;
  }
  n = parseFloat(lines.shift());
}
const media = a / cont;
console.log(`${cont} valores positivos\n${media.toFixed(1)}`);