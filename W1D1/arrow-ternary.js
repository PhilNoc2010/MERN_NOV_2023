// arrow functions

function hello(someName) {
    `this`;
    return "hello " + someName + "!";
}

// arrow function:
const helloArrow = (someName) => {
    console.log("hello");
    return `hello ${someName} !`;
};

// short way
const helloShort = someName => "hello " + someName;

// ternary 3
// 2 - binary
// 10 - decimal
// 16 - hexadecimal

const age = 20;
if (age >= 21) {
    return "you may pass!";
} else {
    return "you need more xp";
}

age >= 21 ? "you may pass!" : "you need more xp";

// ----------- destructuring ------------
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

// const email = person.email;
// const username = person.username;

const { username, email } = person
console.log(email, personUsername);