/*Faça um programa que calcule a potência (potenciação) de um número. 
Para isso ele deve receber dois números de entrada: o primeiro número é a base da potência, o segundo número será a potência.*/

var user = require('readline-sync'); 

var result1 = user.questionInt("Escreva um número: "); 
var result2 = user.questionInt("Escreva um número: ")
var result3 = 1
var cur_run = 0

while (cur_run < result2){
    result3 = result3 * result1
    cur_run = cur_run + 1
}
console.log(result3)