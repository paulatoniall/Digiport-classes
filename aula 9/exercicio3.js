const prompt = require('prompt-sync')();
let saldo = parseFloat(prompt("Digite seu saldo: "));

if(saldo >= 10000)
    console.log("Comprará um novo computador.");

else if(saldo >= 3000)
    console.log("Comprará um smartphone.");

else
    console.log("Decidirá economizar.");