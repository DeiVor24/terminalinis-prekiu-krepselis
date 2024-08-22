export function emptyList(list) {
    return list === 0 ? 'Šiuo metu, jūsų prekių krepšelis yra tuščias.' : list;

}

export function prekesPatikra (preke){
if (!preke.includes(preke)) {
    return `Prekė, su ID: ${preke} neegzistuoja.`;
}
}

export function visaKaina(preke) {
    return (preke.kiekis * preke.kaina).toFixed(2);
}


export function krepselis (krepselis){
    console.log(`Jūsų prekių krepšelyje yra ${prekes.length > 1 ? 'ės' : 'ė'}`);
console.log("-----------------------------------------------------------");
console.log("Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti");
console.log("-----------------------------------------------------------");

krepselis.forEach((preke, index) => {
    const visoMoketi = visaKaina(preke);
    const pavadinimas = preke.pavadinimas.padEnd(preke.length);
    const kiekis = (`${preke.kiekis} +  vnt`).padEnd(preke.length);
    const kaina = (`${preke.kaina.toFixed(2)} + Eur`).padEnd(preke.length);
    const viso = `${visoMoketi}  Eur`;
    
    console.log(`${index + 1}. ${pavadinimas} | ${kiekis} | ${kaina} | ${viso}`);
});

console.log("-----------------------------------------------------------");
}

