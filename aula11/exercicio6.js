const prompt = require('prompt-sync')();
let correctPassword = "1234", senha;


do{
    senha = prompt("Digite sua senha: ");
}while(senha != correctPassword);

console.log("Senha correta! Acesso concedido.");