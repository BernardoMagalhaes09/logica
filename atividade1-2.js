var user = require('readline-sync'); //importa a biblioteca readline-sync na variavel user

var resultadoDoUsuario = user.question("Escreva um número: "); //chamada método question da biblioteca readline-sync

var n = resultadoDoUsuario

if ((n % 2) === 0){
    console.log("Número Par")
} else{
    console.log("Número Ímpar")
}