const numbers= [10,20,1,123,25,78,36,20,33];

const bigNumber = numbers.filter( number => number > 50)
const smallNumber = numbers.filter( num => num < 50)
const even = numbers.filter( number => number % 2 === 0)
const odd = numbers.filter(number => number % 2 === 1)
console.log(bigNumber);
console.log(smallNumber);
console.log(even);
console.log(odd);


const products = [
    {id:01, name:'laptop', price: 20000 },
    {id:02, name:'Desktop', price: 225000 },
    {id:03, name:'mobile', price: 23000 },
    {id:04, name:'Tab', price: 30000 },
];

// const largePrice = products.filter(product => product.price > 30000)
// const largePrice = products.filter(product => product.price > 3000)
const largePrice = products.filter(product => product.price > 25000)
console.log(largePrice);