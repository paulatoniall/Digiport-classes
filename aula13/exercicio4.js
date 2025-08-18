// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [{name: "leite", price: 8}, {name: "açúcar", price: 15}, {name: "farinha", price: 5}];

for(let product of market){
    console.log(`Nome: ${product.name}\nPreço: ${product.price}\n`);
}

