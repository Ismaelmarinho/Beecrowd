var input = require('fs').readFileSync('stdin', 'utf8')
var m = []
for(var i = 0; i < 12; i++){
    var vetor = []
    for(var l = 0; l < 12; l++){
        vetor.push(parseFloat(lines[i*12+l+1]))
    }
    m.push(vetor)
}
var so = 0
var s = 1
for(var c = 11; c > 0; c--){
    for(var a= s; a < 12; a++){
        var x = m[a][c]
        so+=x
    }
    s++
}
var letra = lines[0]
if(letra.includes('S')){
    console.log(so.toFixed(1))
}else if(letra.includes('M')){
    console.log((so/66).toFixed(1))
}
