const prompt = require('prompt-sync')();
let positivos = 0, negativos = 0, zeros = 0.

for(let i=0; i<10; i++){
    let num = parseInt(prompt("Escreva um número: "));
    if(num > 0) positivos++;
    else if(num< 0) negativos++;
    else zeros++;
}

console.log("Positivos:", positivos, "\nNegativos:", negativos, "\nZeros:", zeros);

