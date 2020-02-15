var user = require('readline-sync');

var maçã = user.question("Você vai levar quantas maçãs: ");

if (maçã > 12){
    console.log("Vender maçã a 0,25")
} else{
    console.log ("Vender maçã a 0,30")
}