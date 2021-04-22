const groceryList = [
    {
    id: 1,
    name: "milk",
    price: 5
    },
    {
    id: 2,
    name: "eggs",
    price: 5
    },
    {
    id: 3,
    name: "pizza rolls",
    price: 5
    },
    {
    id: 4,
    name: "steaks",
    price: 5
    },
    {
    id: 5,
    name: "grapes",
    price: 5
    },
    {
    id: 6,
    name: "sandwich buns",
    price: 5
    },
    {
    id:7,
    name: "condiments",
    price: 5
    }
]

const newGrocery = {
    name: "cheese",
    price: 10,
};

const newGrocery2 = {
    name: "pepperoni",
    price: 10,
};

const newGrocery3 = {
    name: "taco",
    price: 10,
};

const newGrocery4 = {
    name: "12 pack of soda",
    price: 8,
};

const newGrocery5 = {
    name: "hot pockets",
    price: 5,
};


let dateCreated = new Date();

const addToGroceryList = (taco) => {
    const lastIndex = groceryList.length - 1
    const currentLastObject = groceryList[lastIndex]
    const maxId = currentLastObject.id
    const idForNewObject = maxId + 1
    taco.id = idForNewObject
    taco.dateCreated = dateCreated
    groceryList.push(taco);
}



addToGroceryList(newGrocery)
addToGroceryList(newGrocery2)
addToGroceryList(newGrocery3)
addToGroceryList(newGrocery4)
addToGroceryList(newGrocery5)

for (const expensiveGroceries of groceryList) {
    if (expensiveGroceries.price > 8) 
    console.log(`These items are expensive! ${expensiveGroceries.name} : $${expensiveGroceries.price}`)
};

let expensiveGroceries = []
console.log(groceryList.price)