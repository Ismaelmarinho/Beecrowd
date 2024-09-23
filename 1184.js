var input = require('fs').readFileSync('stdin', 'utf8')
var m = []
for(var c = 0; c < 12; c++){
    var vetor = []
    for(var l = 0; l < 12; l++){
        vetor.push(parseFloat(lines[c*12+l+1]))
    }
    m.push(vetor)
}
var so = 0
var s = 1
for(var c = 0; c < 11; c++){
    for(var i = s; i < 12; i++){
        var x = m[i][c]
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
