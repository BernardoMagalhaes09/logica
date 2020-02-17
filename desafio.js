var extenso = require('extenso');
var user = require('readline-sync');

var resultadoDoUsuario = user.question("Escreva um número de 1 a 1 bilhão: ")

console.log(extenso(resultadoDoUsuario))