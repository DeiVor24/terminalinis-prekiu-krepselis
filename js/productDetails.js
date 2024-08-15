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

const top1 = ' Prekės informacija ';
console.log(top1);
console.log(dash);
const a1 = `ID            | ${firstShoppingList[1].id} `;
console.log(a1);
const b1 = `Pavadinimas   | ${firstShoppingList[1].name} `;
console.log(b1);
const c1 = `Kiekis        | ${firstShoppingList[1].amount} vnt`;
console.log(c1);
const d1 = `Vieneto kaina | ${firstShoppingList[1].unitPrice} eur`;
console.log(d1);
const e1 = `Viso moketi   | ${visomoketi(firstShoppingList[1].amount,firstShoppingList[1].unitPrice )} eur`;
console.log(e1);

const top2 = ' Prekės informacija ';
console.log(top2);
console.log(dash);
const a2 = `ID            | ${firstShoppingList[2].id} `;
console.log(a2);
const b2 = `Pavadinimas   | ${firstShoppingList[2].name} `;
console.log(b2);
const c2 = `Kiekis        | ${firstShoppingList[2].amount} vnt`;
console.log(c2);
const d2 = `Vieneto kaina | ${firstShoppingList[2].unitPrice} eur`;
console.log(d2);
const e2 = `Viso moketi   | ${visomoketi(firstShoppingList[2].amount,firstShoppingList[2].unitPrice )} eur`;
console.log(e2);

console.log('                                               ');

const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];




const singleTop = ' Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti '
console.log(singleTop);
const kiwi = ' 1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur ';
console.log(pom1);





    
    
Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti
--------------------------------------------------
1. Kivi     | 23 vnt | 0.14 Eur      | 3.22 Eur
--------------------------------------------------


