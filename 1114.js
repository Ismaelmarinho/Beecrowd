var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var p = function(texto) { return lines.shift();};
var x = 1
while (x !=2002){
    x = parseInt(p("Digite a Senha"))
if(x != 2002){
    console.log("Senha Invalida")
}else{
    
    console.log("Acesso Permitido")
}
}  


var a = Number(input)
switch (a) {
    case 2002:
        console.log('Acesso Permitido')
        break;
    case 2200:
        console.log('Senha Invalida')
        break;
    case 1020:
        console.log('Senha Invalida')
        break;
    case 2022:
        console.log('Senha Invalida')
        break;
    default:
        console.log('Senha Invalida')
        break;
}