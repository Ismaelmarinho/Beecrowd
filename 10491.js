var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var t1 = lines[0]
var t2 = lines[1]
var t3 = lines[2]

if (t1 == 'vertebrado')
{
    if(t2 == 'ave')
    {
        if(t3 == 'onivoro')
        {
            console.log('pomba')
        }
        if(t3 == 'carnivoro')
        {
            console.log('aguia')
        }
    }
    if(t2 == 'mamifero')
    {
        if(t3 == 'onivoro')
        {
            console.log('homem')
        }
        if(t3 == 'herbivoro')
        {
            console.log('vaca')
        }
    }
}
if (t1 == 'invertebrado')
{
    if(t2 == 'inseto')
    {
        if(t3 == 'hematofago')
        {
            console.log('pulga')
        }
        if(t3 == 'herbivoro')
        {
            console.log('lagarta')
        }
    }
    if(t2 == 'anelideo')
    {
        if(t3 == 'hematofago')
        {
            console.log('sanguessuga')
        }
        if(t3 == 'onivoro')
        {
            console.log('minhoca')
        }
    }
}