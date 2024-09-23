var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(' ').map((x) => parseFloat(x))
valor.sort((x ,y) => y - x)
var[x, y, z] = valor

if (x >= y + z) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (x ** 2 === y ** 2 + z ** 2) {
        console.log("TRIANGULO RETANGULO");
    }
    if (x ** 2 > y ** 2 + z ** 2) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (x ** 2 < y ** 2 + z ** 2) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (x === y && y === z) {
        console.log("TRIANGULO EQUILATERO");
    }
    if ((x === y && y !== z) || (y === z && z !== x) || (x === z && c !== y)) {
        console.log("TRIANGULO ISOSCELES");
    }
}