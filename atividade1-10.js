var user = require('readline-sync');

var number = user.question("Escreva um número aleatório: ");

if (number >= "100" && number <= "200"){
    console.log("Você escolheu um número entre 100 e 200")
} else{
    console.log ("Você não escolheu um número entre 100 e 200")
}