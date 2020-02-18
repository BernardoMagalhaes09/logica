var user = require('readline-sync'); 

var result1 = user.questionInt("Escreva um número: ");
var cur_run = 0
while (cur_run <= result1){
    console.log(cur_run)
    cur_run = cur_run + 2
}