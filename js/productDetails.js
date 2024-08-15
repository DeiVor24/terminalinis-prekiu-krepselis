const emptyList = [];
function productDetails([], i) {
    return (i <= firstShoppingList.length) ? firstShoppingList[i] : `Prekė, su ID:  ${i}  neegzistuoja.`;
}

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

console.log(productDetails(emptyList, 42069));





const info = ' Viso mokėti   1990000.00 Eur';
const dash = ('-'.repeat(info.length));
console.log(dash);


const top = ' Prekės informacija ';
console.log(top);
console.log(dash);
const a = 'ID            | 1 ';
console.log(a);
const b = 'Pavadinimas   | Pomidoras ';
console.log(b);
const c = 'Kiekis        | 1000000 vnt ';
console.log(c);
const d = 'Vieneto kaina | 1.99 Eur ';
console.log(d);
const e = 'Viso moketi   | 1990000.0 Eur ';
console.log(e);






// Prekės informacija
// ------------------------------
// ID            | 1
// Pavadinimas   | Pomidoras
// Kiekis        | 1000000 vnt
// Vieneto kaina | 1.99 Eur
// Viso mokėti   | 1990000.00 Eur
// ------------------------------
   

    
    



