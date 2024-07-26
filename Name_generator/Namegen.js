
/*Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let rand = Math.random()
let first , sec, third;

//generate the first word
if(rand<0.33){
    first="crazy"
}
else if(rand<0.66&&rand>=0.33){
    first = "amazing";
}
else{
    first="fire"
}

//generate the sec word
 rand = Math.random();
if(rand<0.33){
    sec="Engine"
}
else if(rand<0.66&&rand>=0.33){
    sec = "Foods";
}
else{
    sec="Garments"
}

//generate the third word
 rand = Math.random();
if(rand<0.33){
    third="Bros"
}
else if(rand<0.66&&rand>=0.33){
    third = "Limited";
}
else{
    third="Hub"
}
console.log(`${first} ${sec} ${third}`)