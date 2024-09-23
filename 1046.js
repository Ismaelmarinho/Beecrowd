var input = require('fs').readFileSync('stdin', 'utf8')
var line = input.split(' ').map(Number)
var inc = parseInt(line[0])
var fi = parseInt(line[1])
if (inc > fi){ 
    console.log('O JOGO DUROU ' + (24 - (inc - fi)) + ' HORA(S)')
} else if (fi > inc){
    console.log('O JOGO DUROU ' + (fi - inc) + ' HORA(S)')
} else{
   console.log('O JOGO DUROU 24 HORA(S)')
}
