/*Faça um programa que pergunte ao usuário escolher duas opções A e B. 
A encerra o programa, B é pra fazer uma soma.
Se o usuário inserir A o programa fecha
Se o usuário inserir B o programa vai realizar uma operação de soma, solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o segundo número o algoritmo deve apresentar a soma e também pergunta se quer realizar outro cálculo.
Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer que não entendeu o comando e solicitar novamente para inserir A ou B*/


var user = require('readline-sync')

var result1 = user.question("Escolha uma opção: A = O programa fecha / B = Vamos realizar uma soma: ")

while (result1 != 'A'){
    num1 = user.questionInt("Escreva um número inteiro: ")
    num2 = user.questionInt("Escreva um número inteiro: ")
    console.log(num1 + num2)
    result1 = user.questionInt("Deseja fazer outra operação? (A = SIM / B = NÃO): ")
}
