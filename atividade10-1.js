/*Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objetos para resolver este problema*/

var user = require('readline-sync')

var cor = user.question('escreva a cor do seu carro: ')
var modelo = user.question('escreva a modelo do seu carro: ')
var marca = user.question('escreva a marca do seu carro: ')

var carro = new Object()
carro.cor = cor
carro.modelo = modelo
carro.marca = marca

console.log(carro)
