var input = require('fs').readFileSync('stdin', 'utf8');
var [x, y] = input.split(' ').map(Number)
if( x >0.0){
    if(y > 0.0)
    console.log("Q1");
    else if(y < 0.0)
    console.log("Q4");
    else
    console.log("Eixo X");
} else if(x < 0.0){
    if(y > 0.0)
    console.log("Q2");
    else if(y < 0.0)
    console.log("Q3");
    else
    console.log("Eixo X")
}else{
    if(y > 0.0)
    console.log("Eixo Y");
    else if(y < 0.0)
    console.log("Eixo Y");
    else
    console.log("Origem")
}
