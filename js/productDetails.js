// console.log(productDetails(emptyList, 42069));
// /*
// Prekė, su ID: 42069 neegzistuoja.
// */





const emptyList = [];
function productDetails([], i) {
    return (i <= firstShoppingList.length) ? firstShoppingList[i] : `Prekė, su ID:  ${i}  neegzistuoja.`;
}


// function productDetails (){
//     for (let i = 0; i < firstShoppingList.length; i++);
// } 


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

console.log(productDetails(emptyList, ));
   

    
    



