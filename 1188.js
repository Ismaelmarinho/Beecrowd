var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var o = lines.shift();
 var p = [];
 var v = 0;
 var m = 1;
 for(var i = 7; i<12; i++){
    v = i * 12;
    for(var j = 12-i; j<12/2+m; j++){
        p.push(v + j);
    }
   m++;
 }


 var sum = 0;
 var count = 0;
 
 for(var i = 0; i<144; i++){
     var num = parseFloat(lines.shift());
     if(p.indexOf(i)!=-1){
         sum += num;
         count++;
     }
 }
 
 if(o=='S'){
     console.log(sum.toFixed(1));
 }else{
     console.log((sum/count).toFixed(1));
 }