export function shoppingList(emptyList) {
    if (emptyList.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    
let totalItems = emptyList.length;
let result = `Jūsų prekių krepšelyje yra ${totalItems} prekės:\n`;
result += '-----------------------------------------------------------\n';
result += 'Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti\n';
result += '-----------------------------------------------------------\n';

emptyList.forEach((item, index) => {
    let totalPrice = (item.amount * item.unitPrice / 100).toFixed(2); 
    let unitPrice = (item.unitPrice / 100).toFixed(2); 

    result += `${index + 1}. ${item.name.padEnd(10)} | ${item.amount} vnt       | ${unitPrice} Eur      | ${totalPrice} Eur\n`;
});

result += '-----------------------------------------------------------\n';

return result;
}


