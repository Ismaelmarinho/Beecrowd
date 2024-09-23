var input = require('fs').readFileSync('stdin', 'utf8')
var [v,b] = input.split('\n').map(Number)
switch (v) {
    case 1:
        if (b%2==0) {
            console.log(`${b} é par`)
        }else {
            console.log(`${b} é ímpar`)
        }
        break;
    case 2:
        console.log(`A raíz quadrada de ${b} é ${Math.sqrt(b)}`)
        break;
    case 3:
        console.log(`${b} elevado a 3 é ${Math.pow(b,3)}`)
        break;
    
    default:
        console.log('Opção inválida!')
        break;
}