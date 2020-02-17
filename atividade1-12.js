var user = require('readline-sync');

var genero = user.question("Gênero (M/F): ");
var nome = user.question("Nome: ");
var estadoCivil = user.question("Estado civil(Casada(o)/Solteiro(a)): ");

if (genero === "F" && estadoCivil === "Casada"){
    tempo = user.question("Tempo de casamento(X anos): ");
    console.log(tempo)
} else{
    console.log ("Não é mulher ou não é casada")
}