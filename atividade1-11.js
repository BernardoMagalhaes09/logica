var user = require('readline-sync');

var number0 = user.question("Escreva nota da p1: ");
var number1 = user.question("Escreva nota da p2: ");
var number2 = user.question("Escreva nota da p3: ");

number3 = parseInt(number0)
number4 = parseInt(number1)
number5 = parseInt(number2)

if (((number3 + number4 + number5)/3) >= '7'){
    console.log("ALUNO APROVADO")
} else{
    console.log ("ALUNO REPROVADO")
}