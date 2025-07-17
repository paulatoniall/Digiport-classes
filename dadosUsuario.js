const nome = "Luiz Otavio Miranda";
const nomeSeparado = nome.split(" ");
const sobrenome = "Miranda";
const altura = 1.8;
let anoAtual = 2025;
const idade = 30;
let anoNascimento = anoAtual - idade;
let peso = 84;
let imc = peso / (altura * altura);

console.log(`
    ${nome} tem ${idade} anos, pesa ${peso} kg,
    Tem ${altura}m e seu IMC é de ${imc}
    ${nomeSeparado[0].toLowerCase()} ${nomeSeparado[2].toLowerCase()} nasceu em ${anoNascimento}
    `)




