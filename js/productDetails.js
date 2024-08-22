export function visaKaina(preke) {
    console.log("------------------------------");
    console.log("Prekės informacija");
    console.log("------------------------------");
    console.log(`ID            |  ${preke.id}`);
    console.log(`Pavadinimas   |  ${preke.pavadinimas}`);
    console.log(`Kiekis        |  ${preke.kiekis} vnt`);
    console.log(`Vieneto kaina |  ${preke.kaina.toFixed(2)} Eur`);
    console.log(`Viso mokėti   |  ${visaKaina(preke)} Eur`);
    console.log("------------------------------");
}