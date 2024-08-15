const emptyList = [];
function productDetails([], i) {
    return (i <= firstShoppingList.length) ? firstShoppingList[i] : `Prekė, su ID:  ${i}  neegzistuoja.`;
}

const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 1.99,
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

console.log(productDetails(emptyList, 42069));

function visomoketi(a,b) {
    return (a * b).toFixed(2);
    
}



const info = ' Viso mokėti   1990000.00 Eur';
const dash = ('-'.repeat(info.length));
console.log(dash);


const top = ' Prekės informacija ';
console.log(top);
console.log(dash);
const a = `ID            | ${firstShoppingList[0].id} `;
console.log(a);
const b = `Pavadinimas   | ${firstShoppingList[0].name} `;
console.log(b);
const c = `Kiekis        | ${firstShoppingList[0].amount} vnt`;
console.log(c);
const d = `Vieneto kaina | ${firstShoppingList[0].unitPrice} eur`;
console.log(d);
const e = `Viso moketi   | ${visomoketi(firstShoppingList[0].amount,firstShoppingList[0].unitPrice )} eur`;
console.log(e);







    
    



