var user = require('readline-sync');

var pergunta1 = user.question("Medida angulo um ");
var pergunta2 = user.question("Medida angulo dois ")
var pergunta3 = user.question("Medida angulo tres ")

if (pergunta1 || pergunta2 || pergunta3 === "90"){
    console.log("Triangulo Retangulo")
} else if (pergunta1 || pergunta3 || pergunta2 > '90'){
    console.log("Obtusangulo")
}else if (pergunta1 && pergunta2 && pergunta3 < '90'){
    console.log("Acutangulo")
}