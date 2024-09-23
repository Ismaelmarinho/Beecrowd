var input = require('fs').readFileSync('stdin', 'utf8')
var [a,b,c] = input.split('/n').map(Number)
var m = ( a * 2 + b * 3 + c * 5)/10
if (m < 5) {
    console.log(`Sua média foi ${m.toFixed(2)} e seu conceito E`)
} else if (m < 6){
    console.log(`Sua média foi ${m.toFixed(2)} e seu conceito D`)
} else if (m < 7){
    console.log(`Sua média foi ${m.toFixed(2)} e seu conceito C`)
} else if (m < 8){
    console.log(`Sua média foi ${m.toFixed(2)} e seu conceito B`)
} else if (m < 10){
    console.log(`Sua média foi ${m.toFixed(2)} e seu conceito A`)
}