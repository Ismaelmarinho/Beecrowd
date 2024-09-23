var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var o = lines.shift();
var po = [];
var v = 0;
var m = 1;
for(var i = 1; i<11; i++){
   v = i * 12;
   if(i<=5){
     for(var j = 11; j>11-i; j--){
       po.push(v + j);
     }
   }else{
     for(var j = 11; j>11-i+m; j--){
       po.push(v + j);
     }
     m += 2;
   }
}


var sum = 0;
var count = 0;

for(var i = 0; i<144; i++){
    var num = parseFloat(lines.shift());
    if(po.indexOf(i)!=-1){
        sum += num;
        count++;
    }
}

if(o=='S'){
    console.log(sum.toFixed(1));
}else{
    console.log((sum/count).toFixed(1));
}