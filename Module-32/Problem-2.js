/*1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */
const numbers = [ 1, 9, 17, 22 ];

const add = numbers.reduce((previous,current) => previous + current,0);
// console.log(add);
// using loop 
let result = 0;
for (let num of numbers){
    result+=num
}
// console.log(result);

