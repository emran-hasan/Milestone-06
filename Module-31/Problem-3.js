/*Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.*/

const Calculate = (first, second) =>{
    const square1 = first * 2;
    const square2 = second *2;
    const sumOfSquare = square1 + square2;
    return sumOfSquare;
}
const result = Calculate(2,3);
console.log(result);
