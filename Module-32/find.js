const numbers= [10,20,1,123,25,78,36,20,33];

const fives = numbers.find( number => number > 30)
const result = numbers.find(number => number % 5 === 0)
const filtering = numbers.filter(number => number % 5 === 0)
console.log(fives);
console.log(result);
console.log(filtering);