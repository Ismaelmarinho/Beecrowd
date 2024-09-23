var input = require('fs').readFileSync('stdin', 'utf8')
var r = Number(input)
// var resultado = areaCirculo(r)
// console.log(`A=${resultado.toFixed(4)}`)


console.log(`A=${areaCirculo(r).toFixed(4)}`)

function areaCirculo(raio) {
    const PI = 3.14159
    var area = PI * Math.pow(raio,2)
    return area
}