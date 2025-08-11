const prompt = require('prompt-sync')();


for(let i=1; i<8; i++){
    let macas = parseInt(prompt("Quantas maçãs João colheu no dia?"));
    console.log("No dia", i, "João colheu", macas, "maçãs.");
}