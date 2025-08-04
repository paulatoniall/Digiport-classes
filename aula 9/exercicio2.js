
const prompt = require('prompt-sync')();
let nota = parseFloat(prompt("Digite sua nota: "));

if(nota >= 7)
    console.log("APROVADO");

else
    console.log("REPROVADO");