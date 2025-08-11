const prompt = require('prompt-sync')();
let opcao = 0;

while(opcao != 4){
    opcao = parseInt(prompt("1. Verificar saldo\n2. Depositar\n3. Sacar\n4. Sair\n"));
    switch(opcao){
        case 1: console.log("O saldo é 1000"); break;
        case 2: console.log("Transferindo para área de depósito. . ."); break;
        case 3: console.log("Transferindo para área de depósito. . ."); break;
        case 4: console.log("Saindo."); break;
    }
    
}

