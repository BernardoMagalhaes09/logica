var user = require('readline-sync');

var pergunta1 = user.question("Medida angulo um ");
var pergunta2 = user.question("Medida angulo dois ")
var pergunta3 = user.question("Medida angulo tres ")

if (pergunta1 === pergunta2 && pergunta2 === pergunta3){
    console.log("Equilatero")
} else if (pergunta1 === pergunta3 || pergunta1 ===pergunta2){
    console.log("Isóceles")
}else{
    console.log("Escaleno")
}