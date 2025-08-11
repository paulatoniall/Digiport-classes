const prompt = require('prompt-sync')();

let soma = 0, num =0;

do{
    soma += num;
    num = parseInt(prompt("Digite um número: "));
}while(num>0)

console.log("Soma:", soma);