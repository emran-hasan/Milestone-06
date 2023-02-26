const numbers = [2,3,4,5,6];
const half = numbers.map(x=>x/2);
const third =numbers.map(y=> y/3);
console.log(half);
console.log(third);

const myFriend =['Emran', 'Mamun', 'Raiyan', 'Abdullah', 'Nahiyan'];
const friend = myFriend.map(x => x[0])
const nameLength = myFriend.map( y => y.length) 
console.log(friend);
console.log(nameLength);

const products = [
    {id:01, name:'laptop', price: 20000 },
    {id:02, name:'Desktop', price: 225000 },
    {id:03, name:'mobile', price: 23000 },
    {id:04, name:'Tab', price: 30000 },
];

// const items = products.map(x => x.name)
const items = products.map(x => x.price)
console.log(items);
