var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('/n')
let l = Number(lines.shift())
let o = lines.shift().trim()
let soma = 0
let re = 0 
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        let n = Number(lines.shift())
        if (i==l) {
            soma += n
        }
    }
    
}
if (o == 'S') {
    re = soma
} else {
    re = soma / 12
}
console.log(re.toFixed(1))
