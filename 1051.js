var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ').map(Number)
var sa = parseFloat(input)
var im
if (sa >= 0 && sa <= 2000) {
    console.log('Isento')
} else if (sa > 2000 && sa <= 3000){
    im = (sa - 2000) * 0.08;
    console.log('R$ ' + im.toFixed(2))
} else if (sa > 3000 && sa <= 4500){
    im = ((sa - 3000)  * 0.18) + 80
    console.log('R$ ' + im.toFixed(2))
} else{
    im = ((sa - 4500) * 0.28) + 350
    console.log('R$ ' + im.toFixed(2))
}