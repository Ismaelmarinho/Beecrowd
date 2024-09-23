var input = require('fs').readFileSync('stdin', 'utf8')
var sa = input.split(' ').map(Number)
var a
if(sa <= 400.00){
    a = sa*1.15;
    console.log('Novo salario: ' +a.toFixed(2));
    console.log('Reajuste ganho: ' +(sa*0.15).toFixed(2));
    console.log('Em percentual: ' +'15 %');
}else if(sa <= 800.00){
    a = sa*1.12;
    console.log('Novo salario: ' + a.toFixed(2));
    console.log('Reajuste ganho: ' + (sa*0.12).toFixed(2));
    console.log('Em percentual: ' +'12 %');
}else if(sa <= 1200.00){
    a = sa*1.10;
    console.log('Novo salario: ' + a.toFixed(2));
    console.log('Reajuste ganho: ' + (sa*0.10).toFixed(2));
    console.log('Em percentual: ' +'10 %');
}else if(sa <= 2000.00){
    a = sa*1.07;
    console.log('Novo salario: ' +a.toFixed(2));
    console.log('Reajuste ganho: ' +(sa*0.07).toFixed(2));
    console.log('Em percentual: ' +'7 %');
}else if(sa > 2000.00){
    a = sa*1.04;
    console.log('Novo salario: ' +a.toFixed(2));
    console.log('Reajuste ganho: ' +(sa*0.04).toFixed(2));
    console.log('Em percentual: ' +'4 %');
}