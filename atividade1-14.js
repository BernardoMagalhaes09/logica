var user = require('readline-sync');

var numberA = user.question("Escreva um número inteiro aleatório: ");
var numberB = user.question("Escreve outro número inteiro aleatorio: ")

var nA = numberA
var nB = numberB

if((nA % nB) === 0){
    console.log('Número A é divisível por B')
}else{
    console.log("Número A não é divisivel por B")
}