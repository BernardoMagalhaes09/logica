var user = require('readline-sync'); 

var resultadoDoUsuario = user.question("Escreva um número: "); 

var n = resultadoDoUsuario

if ((n % 2) === 0){
    console.log("Número Par")
} else{
    console.log("Número Ímpar")
}