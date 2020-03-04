/*Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, 
caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para que não salve 1 objeto carro e sim uma coleção de carros 
(utilizando arrays, em vez de serializar/deserializar o objeto será o array que possui os carros). 

Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar, 
caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.     
*/

var user = require('readline-sync')
const fs = require('fs')
var carroSerializado = fs.readFileSync('carros.json')
var resp = user.question('Quer adicionar ou exibir? ')

function CadastreCarro(){
    var cor = user.question('escreva a cor do seu carro: ')
    var modelo = user.question('escreva a modelo do seu carro: ')
    var marca = user.question('escreva a marca do seu carro: ')
    var carro = new Object()
    carro.cor = cor
    carro.modelo = modelo
    carro.marca = marca
    listaDeCarros.unshift(carro)
    carroSerializado = JSON.stringify(carro)
    var caminhoDoArquivo = 'carros.json'
    fs.writeFileSync(caminhoDoArquivo, carroSerializado)
}

while(resp != 'exibir'){
    CadastreCarro()
    var resp = user.question('Quer adicionar ou exibir? ')
}
console.log(listaDeCarros)
