const readline = require('readline-sync');
let turno = readline.question("Digite o turno em que você está:\nM para matutino\nV para vespertino\nN para noturno\n");

switch(turno){
    case "M": 
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default: 
        console.log("Valor inválido!");
}