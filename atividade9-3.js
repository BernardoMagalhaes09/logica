/*Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.*/

var user = require('readline-sync');
var Newdata = new Date()
var atualDia = Newdata.getDate()
var atualMes = Newdata.getMonth()
var ano4 = Newdata.getFullYear()
var str_Newdata = (atualDia+1) + '/' + (atualMes+1) + '/' + ano4
var data = user.question('Qual a sua data de nascimento(xx/xx/xxxx)? ')

console.log('A data atual é: ' + str_Newdata)
function DiasDeVida(data){
    var dia = parseInt(data.substr(0, 2))
    var mes = parseInt(data.substr(3, 2))
    var ano = parseInt(data.substr(6, 4))
    return console.log( (dia-atualDia) + (atualMes-mes)*30 + (ano4-ano)*365 + " dias")
}

DiasDeVida(data)