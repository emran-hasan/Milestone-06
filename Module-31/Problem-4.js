
/*Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.*/
const firstArr = [11,20,51];
const secondArr = [25,152,45, 75];
const newArr = [...firstArr, ...secondArr];
const maxNumber = Math.max(...newArr);
newArr.push(500);
console.log(newArr);
console.log(maxNumber);