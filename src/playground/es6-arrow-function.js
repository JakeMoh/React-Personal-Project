function square(x) {
    return x * x;
};

console.log(square(3));

// Arrow function
// const suqareArrow = (x) => {
//     return x * x;
// }

// Condensed arrow function
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// << Challenge Question >>
// Use arrow functions
// getFirstName('Mike Smith) -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const myName = 'Jake Moh';

// const getFirstName = (fn) => {
//     return fn.split(' ')[0];
// }

const getFirstName = (fn) => fn.split(' ')[0];

console.log(getFirstName(myName));