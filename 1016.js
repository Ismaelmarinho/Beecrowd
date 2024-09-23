var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
const mi = (60 * lines) / 30
console.log(mi + " minutos")