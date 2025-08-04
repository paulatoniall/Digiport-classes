let tipo = "ouro";

switch(tipo){
    case "bronze":
        console.log("Desconto de 5%");
        break;

    case "prata":
        console.log("Desconto de 10%");
        break;

    case "ouro":
        console.log("Desconto de 15%");
        break;

    case "platina":
        console.log("Desconto de 20%");
        break;

    default:
        console.log("Tipo de cliente inválido.");
}