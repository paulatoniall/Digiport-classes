let opcao, pedido, falar;

const readline = require('readline-sync');

do{
    opcao = parseInt(readline.question("1. Ver cardápio.\n2. Fazer um pedido\n3.Falar com um atendente\n4. Sair\n"));

    console.clear();
    switch(opcao){
        case 1:
            console.log("Cardápio:\n1. Pastel\n2. Salgado\n3. Doce\n");
            break;
        
        case 2:
            pedido = readline.question("Faça seu pedido:\n");
            break;
        
        case 3:
            falar = readline.question("O que deseja falar com a atendente?\n");
            break;
        
        case 4: 
            console.log("Saindo.");
            break;

        default: console.log("Opção invália. Tente novamente\n")        
    }
}while(opcao != 4)