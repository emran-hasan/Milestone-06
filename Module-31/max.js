const numbers = [12,222,23,14]
const result = Math.max(...numbers);

// console.log(result);

const numbers2 = [...numbers]
numbers.push(55)
numbers2.push(532)
console.log(numbers);
console.log(numbers2);

const minCount = [22,51,12,36,1]
const min = Math.min(...minCount);
console.log(min);


function getName(){
    return ['aaalim', 'halim']
}
const [baba, chacha] = getName();
console.log(chacha, baba);
