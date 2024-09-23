var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('/n').map(Number)
let a = parseInt(lines.shift());
let [b, c] = lines.split(" ");
let i = 0;
let coelhos = 0;
let sapos = 0;
let ratos = 0;

while(i < a){
  if(c == "C"){
    coelhos += parseInt(b);
  }
  else if(c == "R"){
    ratos += parseInt(b);
  }
  else if(c == "S"){
    sapos += parseInt(b);
  }
  i++;
  [jv, c] = lines.shift().trim().split(" ");
}
let total = sapos + coelhos + ratos;
console.log(`Total: ${total} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${((coelhos / total) * 100).toFixed(2)} %\nPercentual de ratos: ${((ratos / total) * 100).toFixed(2)} %\nPercentual de sapos: ${((sapos / total) * 100).toFixed(2)} %`);