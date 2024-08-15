// // const emptyList = [];

// // console.log(shoppingList(emptyList));
// // /*
// // Šiuo metu, jūsų prekių krepšelis yra tuščias.


// const emptyList = [];
// function shoppingList(i) {
//     return (i === 0),'Šiuo metu, jūsų prekių krepšelis yra tuščias.';

// }
// console.log(shoppingList(emptyList));


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

const longest = ' 1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur ';
const dash = ('-'.repeat(longest.length));
console.log(dash);
const top = ' Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti '
console.log(top);
console.log(dash);
const pom1 = ' 1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur ';
console.log(pom1);
const ag2 = ' 2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur ' ;
console.log(ag2);
const svo3 = ' 3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur ';
console.log(svo3);
console.log(dash);
















