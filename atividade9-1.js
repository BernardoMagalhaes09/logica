/*Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.*/

var user = require('readline-sync'); 
var pi = 3.14159
var raio = user.question("Escreva o tamanho do raio: "); 

function Volume(raio){
    return console.log((4/3)*pi*raio)
}
Volume(raio)