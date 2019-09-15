const nameVar = "Jake";
const nameVar = "Mike";
console.log("nameVar", nameVar);

// you cannot redefine let
const nameLet = "Jen";
nameLet = 'julie';
console.log("nameLet", nameLet);

// you cannot redefine const
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// function getPetName() {
//     const petName = 'Hal';
//     return petName;
// }

// getPetName();
// console.log(getPetName());

// Block scoping
// NOTE: var based variables are function scoped
//       let and const based variables are blocked scoped
//         - Made specifically for the blocks

const fullName = "Jake Moh";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);