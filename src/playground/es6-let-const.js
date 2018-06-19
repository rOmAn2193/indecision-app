var nameVar = 'Andrew';
var nameVar = 'Tom';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Ari',
    return petName;
}

// block scoping

var fullName = 'Andrew Mead';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);  
}

console.log(firstName);