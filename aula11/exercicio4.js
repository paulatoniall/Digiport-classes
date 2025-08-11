const prompt = require('prompt-sync')();

let vermelho = 0, verde = 0;

for(let i=0; i<10; i++){
    let cor = prompt("Qual a cor da fruta? ");
    if(cor.toLowerCase()=="vermelho") vermelho++;
    else if(cor.toLowerCase()=="verde") verde++;
}

console.log("Frutas vermelhas:", vermelho);
console.log("Frutas verdes:", verde);