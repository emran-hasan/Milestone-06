const numbers = [2,4,8,6,3];

function getDouble(numbers){
        const output = [];
        for(const number of numbers){
        const double = number * 2;
        output.push(double);

    }
    return output
}
const result = getDouble(numbers);
console.log(result);

// using map 
const doubleIt = num => num * 2;
const makeDouble =numbers.map(doubleIt)
console.log(makeDouble);

// another short version
const fiveTimes = [1,2,3,4,5].map(num=>num*5);
console.log(fiveTimes);
