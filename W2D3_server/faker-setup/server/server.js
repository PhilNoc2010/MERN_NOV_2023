const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        _id: faker.string.uuid()
    };
};

const user = createUser();

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

//Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(user);
});

// ----------------
// User Object
// password
// email
// phoneNumber
// lastName
// firstName
// _id
// Company Object
// _id
// name
// address
// street
// city
// state
// zipCode
// country

app.listen(port, () => console.log(`Listening on port: ${port}`));