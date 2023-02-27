const shop = {
    owner: 'Thomas',
    address: {
        street: 'kochu khet',
        city: 'Dhaka',
        country: 'BD'
    },
    products:['laptop', 'mac', 'keyboard'],
    revenue: true,
    isOpen: false,
}

console.log(shop);
const jsonShop = JSON.stringify(shop)
console.log(jsonShop);
const parseShop = JSON.parse(jsonShop)
console.log(parseShop);