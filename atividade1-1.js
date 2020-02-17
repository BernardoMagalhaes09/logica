var user = require('readline-sync'); //importa a biblioteca readline-sync na variavel user

var resultadoDoUsuario = user.question("Qual ano você nasceu? "); //chamada método question da biblioteca readline-sync
var anoAtual = "2020"

if (anoAtual - resultadoDoUsuario <'16'){
    console.log("Usuário não pode votar!")
} else if (anoAtual - resultadoDoUsuario >= '16' && anoAtual - resultadoDoUsuario < '18'){
    console.log("Usuário Pode votar!")
}else if (anoAtual - resultadoDoUsuario >= '18' && anoAtual - resultadoDoUsuario < '65'){
    console.log("Usuário é obrigado a votar!")
}else{
    console.log("Usuario pode votar!")
}

console.log(anoAtual - resultadoDoUsuario + " anos")