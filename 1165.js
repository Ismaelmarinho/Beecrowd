var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let a = lines.shift();
let nu = lines.shift();
let b = 0;
let num = 0;

while(num < a){
  for(let j = 2; j < nu; j++){
    if(nu % j == 0){
      b++;
    }
  }

  if(b > 0){
    console.log(`${parseInt(nu)} nao eh primo`);
  }
  else{
    console.log(`${parseInt(nu)} eh primo`);
  }

  b = 0;
  num++;
  nu = lines.shift();
}