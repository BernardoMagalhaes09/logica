/*Escreva um programa que pedirá para o usuário dois números entre 1 e 100. 
O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível por 5, o programa deve imprimir “Pong”. 
Caso o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. 
Dica: Neste exercício vocês talvez precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro.8*/

var user = require('readline-sync');

var resp1 = user.questionInt("Digite um número entre 1 e 100: ");
var resp2 = user.questionInt("Digite outro número entre 1 e 100: ")

if(resp1>resp2){
    usarEsse = resp1
}else{
    usarEsse = resp2
}
for(i=0; i<=usarEsse; i++){
    if(i%5 == 0 && i%7 == 0){
        console.log("Ping Pong")
    }else if(i%5 == 0){
        console.log("Pong")
    }else if (i%5 == 0 && i%7 == 0){
        console.log("Ping")
    }else{
        console.log(i)
    }
}
