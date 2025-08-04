const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número de 1 a 7 e será indicado o dia correspondente da semana, começando no domingo: "));

switch(num){
    case 1: 
        console.log("Domingo");
        break;

    case 2: 
        console.log("Segunda");
        break;

    case 3: 
        console.log("Terça");
        break;

    case 4: 
        console.log("Quarta");
        break;

    case 5: 
        console.log("Quinta");
        break;

    case 6: 
        console.log("Sexta");
        break;

    case 7: 
        console.log("Sábado");
        break;

    default:
        console.log("Escolha inválida");
}