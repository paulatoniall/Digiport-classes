const prompt = require('prompt-sync')();

let eba = [4, -9, 15, 0, 2];
let soma = 0, maior=eba[0], menor=eba[0];

for(let i=0; i<eba.length; i++){
    if(eba[i] < menor) menor = eba[i];
    if(eba[i] > maior) maior = eba[i];
    console.log(`[${i}] = ${eba[i]}`);
    soma += eba[i];
}

console.log("A média é: ", soma/eba.length,"\nMaior número: ", maior, "\nMenor número:", menor);

let numeros =[];

for(let i=0; i<5; i++){
    let num = parseFloat(prompt("Digite um número:"));
    numeros.push(num);
}

console.log(numeros);




    
