/*Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/

const multiplication = (first, second, third) => {
    return first*second* third;
}
const result1 = multiplication(2,3,4);
console.log(result1);

/*2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.*/

const fullSentence = 'I am a web developer. I love to code. I love to eat biryani.';
const result = `I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(result);


/*3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.*/

const parameter = (first, second=11) => first+ second;
const add = parameter(20);
console.log(add);