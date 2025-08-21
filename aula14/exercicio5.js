function media(a){
    let soma=0;
    for(let i=0; i<a.length; i++)
        soma += a[i];

    return soma / a.length;
}

let num = [1, 2, 3];
console.log(media(num));