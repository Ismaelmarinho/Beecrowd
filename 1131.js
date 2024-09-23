var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var IN = 0
var GR = 0
var J = 0
var F = 0
var em = 0


mensagem()

for(var i = 0; i < lines.length;i++){
    var [golInt,golGrem] = lines[i].split(' ').map(Number)
    if(golInt > golGrem){
        IN++
    } if(golInt < golGrem){
        GR++
    } else if(golInt == golGrem){
        em++
    } 
}

for(var y = 1; y < lines.length; y+=2){
    var res = Number(lines[y])
    if(res == 1){
    J++
    mensagem()
    } else if(res == 2){
    F++
    } 
var cf = F+J
}

console.log(`${cf} grenais`)
console.log(`Inter:${IN}
Gremio:${GR}
Empates:${em}`)


if(IN>GR){
    console.log("Inter venceu mais")
}else if(GR>IN){
    console.log("Gremio venceu mais")
}else{
    console.log("Nao houve vencedor")
}

function mensagem(){
    console.log("Novo grenal (1-sim 2-nao)")
}
