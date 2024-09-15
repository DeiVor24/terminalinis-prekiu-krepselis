export function productDetails(emptyList, productId) {
    const product = emptyList.find(item => item.id === productId);
    if (!product) {
        return `Prekė, su ID: ${productId} neegzistuoja.`;
    }
    
    let totalPrice = (product.amount * product.unitPrice / 100).toFixed(2);
    let unitPrice = (product.unitPrice / 100).toFixed(2); 

    let result = '------------------------------\n';
    result += 'Prekės informacija\n';
    result += '------------------------------\n';
    result += `ID            | ${product.id}\n`;
    result += `Pavadinimas   | ${product.name}\n`;
    result += `Kiekis        | ${product.amount} vnt\n`;
    result += `Vieneto kaina | ${unitPrice} Eur\n`;
    result += `Viso mokėti   | ${totalPrice} Eur\n`;
    result += '------------------------------';

    return result;

}