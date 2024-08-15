
function visomoketi(a,b) {
    return (a * b).toFixed(2);
    
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





const krepselis = firstShoppingList.length;
console.log(`Jūsų prekių krepšelyje yra ${krepselis} prekės:`);

const longest = ` 1. ${firstShoppingList[0].name} | ${firstShoppingList[0].amount} vnt | ${firstShoppingList[0].unitPrice} eur       | ${visomoketi(firstShoppingList[0].amount,firstShoppingList[0].unitPrice )} eur`;
const dash = ('-'.repeat(longest.length));
console.log(dash);
const top = ' Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti '
console.log(top);
console.log(dash);
const pom1 = ` 1. ${firstShoppingList[0].name} | ${firstShoppingList[0].amount} vnt | ${firstShoppingList[0].unitPrice} eur       | ${visomoketi(firstShoppingList[0].amount,firstShoppingList[0].unitPrice )} eur`;
console.log(pom1);
const ag2 = ` 2. ${firstShoppingList[1].name}   | ${firstShoppingList[1].amount} vnt       | ${firstShoppingList[1].unitPrice} eur        | ${visomoketi(firstShoppingList[1].amount,firstShoppingList[1].unitPrice )} eur` ;
console.log(ag2);
const svo3 = ` 3. ${firstShoppingList[2].name}  | ${firstShoppingList[2].amount} vnt       | ${firstShoppingList[2].unitPrice} eur        | ${visomoketi(firstShoppingList[2].amount,firstShoppingList[2].unitPrice )} eur`;
console.log(svo3); 
console.log(dash);
















