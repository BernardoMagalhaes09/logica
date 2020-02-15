var user = require('readline-sync');

var pergunta1 = user.question("Sexo: Masculino ou Feminino? ");
var pergunta2 = user.question("Agora digite sua altura em metros (ex:1.73): ")

if (pergunta1 === "Masculino"){
    console.log("IMC : " +((72.7*pergunta2)-58))
} else{
    console.log ("IMC : " +((62.1*pergunta2)-44.7))
}