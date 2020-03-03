/*Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na condição IF.*/

var user = require('readline-sync'); 
var intPosi = user.questionInt("Escreva um número inteiro e positivo: "); 
var x = 1
var contador = 0

function EhPrimo(intPosi){
    while (x <= intPosi){
        if(intPosi % x == 0){
          contador = contador + 1
          x = x + 1
        }else{
          x = x + 1
        }
      }
      if (contador == 2){
        console.log(intPosi + " Número primo")
}
}
EhPrimo(intPosi)