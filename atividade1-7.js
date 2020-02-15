var user = require('readline-sync');

var pergunta1 = user.question("Quantos lados tem seu poligono regular? ");
var pergunta2 = user.question("Quantos centimetros tem os lados desse poligono? (ex:1.73): ")

if (pergunta1 === "3"){
    console.log("Triângulo " +(pergunta2+"cm * altura"))
} else if (pergunta1 === "4"){
    console.log("Quadrado "+(pergunta2*2))
}else{
    console.log("Pentágono")
}