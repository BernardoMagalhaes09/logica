var user = require('readline-sync'); //importa a biblioteca readline-sync na variavel user

var resultadoDoUsuario = user.question("Escreva sua senha: "); //chamada método question da biblioteca readline-sync

if (resultadoDoUsuario === "1234"){
    console.log("ACESSO PERMITIDO")
} else{
    console.log("ACESSO NEGADO")
}