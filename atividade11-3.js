modulo = require('canivetesuiconode')
usuario = require('readline-sync')

n = usuario.question('Insira um número: ')
numberpar = modulo.NumeroPar(n)
numberprimo = modulo.NumeroPrimo(n)

if ( numberpar = true){
    console.log('É par')
}else if ( numberprimo = true){
    console.log('Número primo')
}else{
    console.log('Não é par nem primo')
}
