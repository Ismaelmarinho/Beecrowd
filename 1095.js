var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')
var i = 1
for(var j = 60; j >= 0; j = j-5){
        console.log(`I=${i} J=${j}`)
        i = i + 3
}

