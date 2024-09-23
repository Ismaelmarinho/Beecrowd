var input = require('fs').readFileSync('stdin', 'utf8')
var [a,b,c] = input.split(' ').map(Number)
if (a + b > c && a + c > b && b + c > a) {
    if (a==b && b==c){
    console.log("Triâgulo Equilátero")
} else if (a!=b && a!=c && b!=c){
    console.log("Triângulo Escaleno")
} else{
    console.log("Triângulo Isósceles")
}
} else{
    console.log('não é triângulo!')
}