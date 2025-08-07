let donuts = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

for(let i=0; i<10; i++){
    if(donuts[i] % 3 == 0)
        console.log("Donut", donuts[i], "recheado com chocolate!");
    else
        console.log("Donut", donuts[i], "recheado com baunilha!");
}