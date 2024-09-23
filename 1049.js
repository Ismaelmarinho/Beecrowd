var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var t1 = lines[0]
var t2 = lines[1]
var t3 = lines[2]


if (t1 === "vertebrado" && t2 === "ave" && t3 === "carnivoro"){
    console.log('aguia') 
} else if (t1 === "vertebrado" && t2 === "ave" && t3 === "onivoro"){
    console.log('pomba')
} else if (t1 === "vertebrado" && t2 === "mamifero" && t3 === 'onivoro'){
    console.log('homem') 
} else if (t1 === 'vertebrado' && t2 === 'mamifero' && t3 === 'herbivoro'){
    console.log('vaca')
} else if (t1 === 'invertebrado' && t2 === 'inseto' && t3 === 'hematofago'){
    console.log('pulga') 
} else if (t1 === 'invertebrado' && t2 === 'inseto' && t3 === 'herbivoro'){
    console.log('lagarta')
} else if (t1 === 'invertebrado' && t2 === 'anelideo' && t3 === 'hematofago'){
    console.log('sanguessuga') 
} else if (t1 === 'invertebrado' && t2 === 'anelideo' && t3 === 'onivoro'){
    console.log('minhoca')
} 