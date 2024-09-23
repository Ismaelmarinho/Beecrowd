var input = require('fs').readFileSync('stdin', 'utf8')

for(var i = 0; i <= lines.length; i++ ){
    var [x,y] = lines[i].split(' ').map(Number)
    if(x > 0 && y > 0){
        console.log("primeiro")
    }else if( x < 0 && y > 0){
        console.log("segundo")
    }else if(x < 0 && y < 0){
        console.log("terceiro")
    }else if(x > 0 && y < 0){
        console.log("quarto")
    } else{
        return
    }
}
