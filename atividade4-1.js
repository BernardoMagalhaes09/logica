/*
Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar.
Caso o número também seja primo, o programa deve dizer que ele é primo. (um número primo é um número que só é divisível por ele mesmo e por 1).
Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de um loop.
EX.: 
1 ÍMPAR PRIMO
2 PAR PRIMO
3 ÍMPAR PRIMO*/

var n = 1
var contador = 0
var x = 1

while(n<1000){
  contador = 0
  n = n + 1
  x = 1
  while (x <= n){
    if(n % x == 0){
      contador = contador + 1
      x = x + 1
    }else{
      x = x + 1
    }
  }
  if (contador == 2 && n % 2 == 0){
    console.log(n + " Número primo e par")
  }else if (contador == 2 && n % 2 != 0){
    console.log(n + " Número primo e ímpar")
  }else if (contador != 2 && n % 2 == 0){
    console.log(n + " Número par")
  }else{
    console.log(n + " Número ímpar")}
}