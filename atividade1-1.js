var user = require('readline-sync'); //importa a biblioteca readline-sync na variavel user

var resultadoDoUsuario = user.question("Qual a sua idade? "); //chamada método question da biblioteca readline-sync

if (resultadoDoUsuario >= 16){
    console.log("Usuario pode votar!")
} else{
    console.log("Usuario não pode votar!")
}

