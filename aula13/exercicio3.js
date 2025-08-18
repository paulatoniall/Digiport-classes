// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

dog = {
    name: "Rex",
    breed: "Golden Retriever",
    bark: function(){
        console.log("Woof!");
    }
};

console.log("Nome:", dog.name, "\nRaça:", dog.breed);
dog.bark();

