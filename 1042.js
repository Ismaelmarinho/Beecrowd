var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
input = input.replace('\n',' ');
var lines = input.split(' ');
var i = parseInt(lines.shift());
var b = parseInt(lines.shift()); 
var c = parseInt(lines.shift()); 

if(i > b && i > c)
{
if(b > c){
console.log(c);
console.log(b);
console.log(i);
}
else {
console.log(b);
console.log(c);
console.log(i);
}
}
else if(b > c && b > i) {
if(i > c)
{
console.log(c);
console.log(i);
console.log(b);
}
else{
console.log(i);
console.log(c);
console.log(b);
}
}
else
{
if(i > b)
{
console.log(b);
console.log(i);
console.log(c);
}
else{
console.log(i);
console.log(b);
console.log(c);
}
}
console.log("\n" + i);
console.log(b);
console.log(c);