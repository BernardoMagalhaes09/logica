/*
Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso : 
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/

usuario = require('readline-sync')

class Carro{
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}

function CadastreCarro1(){
    var nome = usuario.question('Insira o nome do seu carro: ')
    var modelo = usuario.question('Insira o modelo do seu carro: ')
    var cor = usuario.question('Insira o cor do seu carro: ')
    return new Carro(nome, modelo, cor)
}

function CadastreCarro2(){
    var nome = usuario.question('Insira o nome do seu carro: ')
    var modelo = usuario.question('Insira o modelo do seu carro: ')
    var cor = usuario.question('Insira o cor do seu carro: ')
    return new Carro(nome, modelo, cor)
}

var carro1 = CadastreCarro1()
var carro2 = CadastreCarro2()


if (carro1.modelo = carro2.modelo){
    if(carro1.nome = carro2.nome){
        if(carro1.cor = carro2.cor){
            console.log('Carro Igual')
        }else{
            console.log('Carro Diferente')
        }
    }else{
        console.log('Carro Diferente')
    }

}else{
    console.log('Carro Diferente')
}
