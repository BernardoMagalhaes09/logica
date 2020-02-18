var user = require('readline-sync'); 

var result1 = user.questionInt("Escreva um número: "); 
var result2 = user.questionInt("Escreva um número: ")
var cur_run = 0
var result3 = 0

while (cur_run < result2){
    result3 = result3 + result1
    cur_run = cur_run + 1
}
console.log(result3)