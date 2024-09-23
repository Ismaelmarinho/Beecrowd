var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('/n')

let matr
for (let i = 0; i < 3; i++) {
    matr[i]= [j]
    for (let j = 0; j < 3; j++) {
        matr[i][j] = i * j + 1
        
    }
    
}
console.table(matr)