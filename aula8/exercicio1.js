let n1 = 2, n2 = 7, n3 = 11;

let maior = n1, menor = n1;

if(n2 > maior)
    maior = n2;

if(n3 > maior)
    maior = n3;

if(n2 < menor)
    menor = n2;

if(n3 < menor)
    menor = n3;

console.log("Maior: ", maior, "\nMenor: ", menor);