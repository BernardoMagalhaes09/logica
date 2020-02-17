var user = require('readline-sync');

var number = user.question("Escreva um número aleatório: ");

resultado = Math.sign(number)

if(resultado === 1){
    console.log(number*2)
}else if(resultado === -1){
    console.log(number*3)
}else{
    console.log("Numero escolhido foi zero")
}