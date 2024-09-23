var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [t, d1] = lines[0].split(' ').map(Number)
var [h1,m1,s1] = lines[1].split(":").map(Number)
var [t, d1] = lines[2].split(' ').map(Number)
var [h2,m2,s2] = lines[3].split(":").map(Number)

var t1 = s1 + m1*60 + h1*(60*60) + d1*(24*60*60)
var t2 = s2 + m2*60 + h2*(60*60)+ d1*(24*60*60)

dif = t2 - t1
d = parseInt(dif/86400)
dif = dif%(86400)

h = parseInt(dif/(3600))
dif = dif%(3600)

m= parseInt(dif/(60))
dif = dif%(60)

s = dif

console.log(`${d} dia(s)` )
console.log(`${h} hora(s)`)
console.log(`${m} minuto(s)`)
console.log(`${s} segundo(s)`)
