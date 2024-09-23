var input = require('fs').readFileSync('stdin', 'utf8');
const [x, y] = input.split("\n")
const re = x / y
console.log(re.toFixed(3) + " km/l")