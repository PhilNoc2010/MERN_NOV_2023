// -- SCOPE
var name = "bob";
sayHi(); // ? 

function sayHi() {
    var name;
    console.log(name);
    name = "alice"
}

console.log(name) // ?

// -- HOISTING --
const x = "bob";
console.log("what is x?", x);
x = 3;

const nums = [11, 22, 33, 44];
nums[0] = "bob";
console.log(nums);

const message = "hi";
message = "hello";

const example = "3"
example = 3;

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { addresses: [, sherlock] } = person;
console.log(sherlock);

const key = "firstName";
const { username, firstName, password } = person;
// const personName = person[key]
// const personLast = person.lastName
console.log(firstName, password, username);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [, coolAnimal, anotherAnimal, , lastAnimal] = animals;
console.log(coolAnimal, anotherAnimal, lastAnimal);



// primitive datatypes
// String
// Number
// Boolean
// Null / undefined

// complex datatypes
// Arrays
// Objects

// for(let i = 0; i < 10; i++ ) {
//     console.log(i)
// }


// --- REST / SPREAD ----
//        0x00141EF
const a = [10, 20, 30];
const b = [...a];

b.push(10000);

console.log(a); // ? [10, 20, 30]
console.log(b); // ? [10, 20, 30]