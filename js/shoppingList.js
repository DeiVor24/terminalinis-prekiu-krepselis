function shoppingList(emptyList) {
    return ((emptyList + emptyList.length) === 0),'Šiuo metu, jūsų prekių krepšelis yra tuščias.'
};
const emptyList = [];
console.log(shoppingList(emptyList));




const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];


console.log(firstShoppingList.length);


console.log(`Jūsų prekių krepšelyje yra ${firstShoppingList.length}  prekės:`);







