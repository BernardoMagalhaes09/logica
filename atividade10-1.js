/*Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.  
Após isso imprima os valores lidos do json do arquivo.
OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo mudados a cada execução. */

//criando variavel
var user = require('readline-sync')
const fs = require('fs')
var cor = user.question('escreva a cor do seu carro: ')
var modelo = user.question('escreva a modelo do seu carro: ')
var marca = user.question('escreva a marca do seu carro: ')

//criando objeto
var carro = new Object()
carro.cor = cor
carro.modelo = modelo
carro.marca = marca
console.log(carro)

//transformando dicionario em string
carroSerializado = JSON.stringify(carro)
var caminhoDoArquivo = 'carro.json'
fs.writeFileSync(caminhoDoArquivo, carroSerializado)